import { Player } from "./modules/player";
import { Gameboard } from "./modules/gameboard";
import { Ship } from "./modules/ship";
import { DOMController } from "./dom-controller";

class Game {
  #player1 = {};
  #player2 = {};
  #player1ShipsSet = false;
  #currentPlayer;
  #playerDOM = new Map();
  #boardSize = 10;

  constructor() {
    this.#player1 = new Player("You", new Gameboard());
    this.#player2 = new Player("Machine", new Gameboard());
    this.#currentPlayer = this.#player1;

    this.#playerDOM.set(this.#player1, document.querySelector("#player1"));
    this.updateBoards();

    DOMController.drawPreGameShips([2, 3, 3, 4, 5]);
    DOMController.drawPreGameRandomButton();
    this.addPreGameRandomButtonAddEventListener();
  }

  startGame() {
    document.querySelector("main").innerHTML = `
      <section>
        <p class="player1-name"></p>
        <div id="player1"></div>
      </section>
      <section>
        <p class="player2-name"></p>
        <div id="player2"></div>
      </section>
    `;
    this.#player1ShipsSet = true;

    this.#player2.placeShipsRandomly([
      new Ship(2),
      new Ship(3),
      new Ship(3),
      new Ship(4),
      new Ship(5),
    ]);

    DOMController.drawName();
    this.#playerDOM.set(this.#player1, document.querySelector("#player1"));
    this.#playerDOM.set(this.#player2, document.querySelector("#player2"));
    this.updateBoards();
  }

  addPreGameRandomButtonAddEventListener() {
    const button = document.querySelector(".random");
    button.addEventListener("click", () => {
      this.#player1.placeShipsRandomly([
        new Ship(2),
        new Ship(3),
        new Ship(3),
        new Ship(4),
        new Ship(5),
      ]);
      this.updateBoards();
      document.querySelector(".pre-game .ships").innerHTML = "";
      document.querySelector(".pre-game .pre-title").textContent =
        "You can place randomly again";
      DOMController.drawPreGameStartButton();
      this.addPreGameStartButtonAddEventListener();
    });
  }

  addPreGameStartButtonAddEventListener() {
    const button = document.querySelector(".pre-game .start");
    button.addEventListener("click", () => {
      this.startGame();
    });
  }

  updateBoards() {
    for (const [player, el] of this.#playerDOM.entries()) {
      DOMController.drawBoard(el);
      DOMController.drawShips(
        el,
        player.gameboard.ships.reduce((a, b) => a.concat(b.coordinates), []),
      );
      DOMController.drawShots(el, player.gameboard.shots);

      this.addBoardEventListeners(el, player);
    }
  }

  addBoardEventListeners(parentEl, player) {
    const boxes = parentEl.querySelectorAll("[data-x][data-y]");

    for (const box of boxes) {
      const boxClasses = box.getAttribute("class")?.split(" ") || [];
      if (boxClasses.includes("shot")) continue;
      box.addEventListener("click", () => {
        const x = box.getAttribute("data-x");
        const y = box.getAttribute("data-y");
        this.handleAttack([+x, +y], player);
      });
    }
  }

  handleAttack(coord, player) {
    if (this.#currentPlayer === player) return;
    player.receiveAttack(coord);
    this.switchPlayer();

    this.updateBoards();

    if (player.isShipsSunk()) {
      this.handleWin();
    }
  }

  switchPlayer() {
    this.#currentPlayer =
      this.#currentPlayer === this.#player1 ? this.#player2 : this.#player1;

    if (this.#currentPlayer === this.#player2) {
      this.handleMachineMove();
    }
  }

  handleWin() {
    setTimeout(() => {
      window.alert(
        `${this.#currentPlayer.name} won. Reload the window to play again!`,
      );
    }, 1);
  }

  handleMachineMove() {
    let placed = false;

    while (!placed) {
      const x = this.#getRandomInt(0, this.#boardSize - 1);
      const y = this.#getRandomInt(0, this.#boardSize - 1);

      try {
        this.handleAttack([x, y], this.#player1);
        placed = true;
      } catch (e) {}
    }
  }

  #getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export { Game };
