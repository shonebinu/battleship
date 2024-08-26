import { Player } from "./modules/player";
import { Gameboard } from "./modules/gameboard";
import { Ship } from "./modules/ship";
import { UIUtilities } from "./ui-utilities";

class Game {
  constructor() {
    this.player1 = new Player("You", new Gameboard());
    this.player2 = new Player("Machine", new Gameboard());
    this.currentPlayer = this.player2;

    this.init();
  }

  init() {
    this.setupDummyShips();
    this.renderBoards();
    this.addEventListeners();
  }

  setupDummyShips() {
    this.placeShips(this.player1);
    this.placeShips(this.player2);
  }

  placeShips(player) {
    const gameboard = player.getGameboard();

    gameboard.placeShip(new Ship(2), [
      [1, 1],
      [1, 0],
    ]);
    gameboard.placeShip(new Ship(3), [
      [2, 2],
      [2, 3],
      [2, 4],
    ]);
    gameboard.placeShip(new Ship(3), [
      [2, 6],
      [2, 7],
      [2, 8],
    ]);
    gameboard.placeShip(new Ship(4), [
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
    ]);
    gameboard.placeShip(new Ship(5), [
      [5, 7],
      [6, 7],
      [7, 7],
      [8, 7],
      [9, 7],
    ]);
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
      box.addEventListener("click", () => {
        if (this.currentPlayer !== player) return;

        const boxClass = box.getAttribute("class");
        if (boxClass && boxClass !== "ship") {
          window.alert("This block has been already targeted once.");
          return;
        }
        this.handleAttack(box, gameboard, playerHTML, player);
      });
    });
  }

  handleAttack(box, gameboard, playerHTML, player) {
    const x = Number(box.getAttribute("data-x"));
    const y = Number(box.getAttribute("data-y"));

    gameboard.receiveAttack([x, y]);

    this.updateBoards();

    setTimeout(() => {
      if (gameboard.isShipsSunk()) {
        alert(`${player.name} won the game`);
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
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
}

export { Game };
