import { Player } from "./modules/player";
import { Gameboard } from "./modules/gameboard";
import { Ship } from "./modules/ship";
import { drawNameAndBoard, drawBoard } from "./ui-utilities";

function init() {
  const player1 = new Player("You", new Gameboard());
  const player2 = new Player("Machine", new Gameboard());

  dummyShips(player1, player2);

  const player1HTML = document.querySelector(".player1");
  const player2HTML = document.querySelector(".player2");

  drawNameAndBoard(player1HTML, player1);
  drawNameAndBoard(player2HTML, player2);

  setEventListeners(player1HTML, player1);
  setEventListeners(player2HTML, player2);
}

function setEventListeners(playerHTML, player) {
  const boxes = playerHTML.querySelectorAll("[data-x][data-y]");
  const gameboard = player.getGameboard();

  for (const box of boxes) {
    box.addEventListener("click", () => {
      const boxClass = box.getAttribute("class");
      if (boxClass && boxClass !== "ship") {
        return;
      }

      const x = Number(box.getAttribute("data-x"));
      const y = Number(box.getAttribute("data-y"));

      gameboard.receiveAttack([x, y]);

      drawNameAndBoard(playerHTML, player);

      if (gameboard.isShipsSunk()) {
        window.alert(`${player.name} won the game`);
      }

      setEventListeners(playerHTML, player);
    });
  }
}

function dummyShips(player1, player2) {
  const player1Gameboard = player1.getGameboard();
  const player2Gameboard = player2.getGameboard();

  player1Gameboard.placeShip(new Ship(2), [
    [1, 1],
    [1, 0],
  ]);
  player1Gameboard.placeShip(new Ship(3), [
    [2, 2],
    [2, 3],
    [2, 4],
  ]);
  player1Gameboard.placeShip(new Ship(3), [
    [2, 6],
    [2, 7],
    [2, 8],
  ]);
  player1Gameboard.placeShip(new Ship(4), [
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
  ]);
  player1Gameboard.placeShip(new Ship(5), [
    [5, 7],
    [6, 7],
    [7, 7],
    [8, 7],
    [9, 7],
  ]);

  player2Gameboard.placeShip(new Ship(2), [
    [0, 3],
    [0, 4],
  ]);

  player2Gameboard.placeShip(new Ship(3), [
    [3, 5],
    [3, 6],
    [3, 7],
  ]);

  player2Gameboard.placeShip(new Ship(3), [
    [6, 0],
    [7, 0],
    [8, 0],
  ]);

  player2Gameboard.placeShip(new Ship(4), [
    [9, 2],
    [8, 2],
    [7, 2],
    [6, 2],
  ]);

  player2Gameboard.placeShip(new Ship(5), [
    [1, 9],
    [2, 9],
    [3, 9],
    [4, 9],
    [5, 9],
  ]);
}

export { init };
