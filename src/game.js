import { Player } from "./modules/player";
import { Gameboard } from "./modules/gameboard";
import { Ship } from "./modules/ship";
import { UIUtilities } from "./ui-utilities";

class Game {
  constructor() {
    this.player1 = new Player("You", new Gameboard());
    this.player2 = new Player("Machine", new Gameboard());
    this.lastPlayer = this.player2;

    this.init();
  }

  init() {
    this.setupShips();
    this.renderBoards();
    this.addEventListeners();
  }

  setupShips() {
    this.placeShips(this.player1);
    this.placeShips(this.player2);
  }

  placeShips(player) {
    const gameboard = player.getGameboard();
    const usedCoords = new Set();

    for (const len of [2, 3, 3, 4, 5]) {
      let placed = false;

      while (!placed) {
        const x = getRandomInt(0, 10);
        const y = getRandomInt(0, 10);
        const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

        const coords = this.getCoordinates(x, y, len, direction);

        if (this.canPlaceShip(coords, usedCoords)) {
          gameboard.placeShip(new Ship(len), coords);
          coords.forEach((coord) => usedCoords.add(coord.toString()));
          placed = true;
        }
      }
    }
  }

  getCoordinates(x, y, length, direction) {
    const coords = [];

    for (let i = 0; i < length; i++) {
      if (direction === "horizontal") coords.push([x + i, y]);
      else coords.push([x, y + i]);
    }

    return coords;
  }

  canPlaceShip(coords, usedCoords) {
    return coords.every(([x, y]) => {
      return (
        x >= 0 &&
        x < 10 &&
        y >= 0 &&
        y < 10 &&
        !usedCoords.has([x, y].toString())
      );
    });
  }

  renderBoards() {
    const player1HTML = document.querySelector(".player1");
    const player2HTML = document.querySelector(".player2");

    const uiUtilities1 = new UIUtilities(player1HTML, this.player1);
    const uiUtilities2 = new UIUtilities(player2HTML, this.player2);

    uiUtilities1.drawNameAndBoard();
    uiUtilities2.drawNameAndBoard();
  }

  addEventListeners() {
    const player1HTML = document.querySelector(".player1");
    const player2HTML = document.querySelector(".player2");

    this.setupBoardEventListeners(player1HTML, this.player1);
    this.setupBoardEventListeners(player2HTML, this.player2);
  }

  setupBoardEventListeners(playerHTML, player) {
    const boxes = playerHTML.querySelectorAll("[data-x][data-y]");
    const gameboard = player.getGameboard();

    boxes.forEach((box) => {
      const boxClass = box.getAttribute("class")?.split(" ") ?? [];
      if (boxClass && !boxClass.includes("hit") && !boxClass.includes("miss")) {
        box.addEventListener("click", () => {
          if (this.lastPlayer !== player) return;

          this.handleAttack(box, gameboard, player);
        });
      }
    });
  }

  handleAttack(box, gameboard, player) {
    const x = Number(box.getAttribute("data-x"));
    const y = Number(box.getAttribute("data-y"));

    gameboard.receiveAttack([x, y]);

    this.updateBoards();

    setTimeout(() => {
      if (gameboard.isShipsSunk()) {
        alert(`${player.name === "You" ? "Machine" : "You"} won the game`);
        return;
      }
    }, 1);

    this.switchPlayer();
  }

  updateBoards() {
    this.renderBoards();
    this.addEventListeners();
  }

  switchPlayer() {
    this.lastPlayer =
      this.lastPlayer === this.player1 ? this.player2 : this.player1;

    if (this.lastPlayer === this.player1) this.machineTurn();
  }

  machineTurn() {
    const player1Gameboard = this.player1.getGameboard();
    const player1TakenShots = new Set(
      player1Gameboard.getMissedShots().map((coord) => coord.toString()),
    );

    for (const coords of player1Gameboard.getScoredShots().values()) {
      for (const co of coords) {
        player1TakenShots.add(co.toString());
      }
    }

    let placed = false;
    while (!placed) {
      const coord = [getRandomInt(0, 10), getRandomInt(0, 10)];

      if (!player1TakenShots.has(coord.toString())) {
        const [x, y] = coord;

        this.handleAttack(
          document.querySelector(`.player1 [data-x='${x}'][data-y='${y}']`),
          player1Gameboard,
          this.player1,
        );

        placed = true;
      }
    }
  }
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export { Game };
