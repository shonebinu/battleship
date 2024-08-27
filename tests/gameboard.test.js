import { Gameboard } from "../src/modules/gameboard";
import { Ship } from "../src/modules/ship";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("placeShip() throws Error if length of the ship and coordinates are not equal", () => {
    let ship = new Ship(3);
    expect(() => gameboard.placeShip(ship, [])).toThrow(
      "Length of the ship should be same as length of the given coordinates",
    );
  });

  test("placeShip() throws Error if same ship is inserted more than once", () => {
    let ship = new Ship(3);
    gameboard.placeShip(ship, [
      [0, 0],
      [1, 0],
      [2, 0],
    ]);
    expect(() => {
      gameboard.placeShip(ship, [
        [0, 1],
        [1, 1],
        [2, 1],
      ]);
    }).toThrow("Same ship exists within the gameboard");
  });

  test("placeShip() places a ship on the gameboard", () => {
    let ship = new Ship(3);
    gameboard.placeShip(ship, [
      [1, 1],
      [1, 2],
      [1, 3],
    ]);
    expect(gameboard.ships.length).toBe(1);
  });

  test("placeShip() throws Error if ship coordinates overlap", () => {
    let ship1 = new Ship(3);
    let ship2 = new Ship(1);

    gameboard.placeShip(ship1, [
      [1, 1],
      [1, 2],
      [1, 3],
    ]);

    expect(() => {
      gameboard.placeShip(ship2, [[1, 1]]);
    }).toThrow("The ship overlaps with another ship");
  });

  test("receiveAttack() returns true for a hit and updates the ship hit count", () => {
    let ship1 = new Ship(3);

    gameboard.placeShip(ship1, [
      [0, 0],
      [0, 1],
      [0, 2],
    ]);

    expect(gameboard.receiveAttack([0, 0])).toBe(true);
    expect(ship1.hits).toBe(1);
  });

  test("receiveAttack() returns false for a miss", () => {
    let ship1 = new Ship(3);

    gameboard.placeShip(ship1, [
      [0, 0],
      [0, 1],
      [0, 2],
    ]);

    expect(gameboard.receiveAttack([1, 1])).toBe(false);
  });

  test("receiveAttack() records all shots", () => {
    let ship1 = new Ship(3);

    gameboard.placeShip(ship1, [
      [0, 0],
      [0, 1],
      [0, 2],
    ]);

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([1, 1]);

    expect(gameboard.shots).toEqual([
      [0, 0],
      [1, 1],
    ]);
  });

  test("isShipsSunk() returns true if all ships sunk", () => {
    let ship1 = new Ship(2);
    let ship2 = new Ship(1);

    gameboard.placeShip(ship1, [
      [0, 0],
      [0, 1],
    ]);
    gameboard.placeShip(ship2, [[1, 1]]);

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([1, 1]);

    expect(gameboard.isShipsSunk()).toBe(true);
  });

  test("isShipsSunk() returns false if not all ships are sunk", () => {
    let ship1 = new Ship(2);
    let ship2 = new Ship(1);

    gameboard.placeShip(ship1, [
      [0, 0],
      [0, 1],
    ]);
    gameboard.placeShip(ship2, [[1, 1]]);

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([1, 1]);

    expect(gameboard.isShipsSunk()).toBe(false);
  });

  test("clearBoard() empties the ships[] and shots[]", () => {
    let ship = new Ship(1);
    gameboard.placeShip(ship, [[1, 1]]);
    gameboard.receiveAttack([2, 2]);
    gameboard.receiveAttack([1, 1]);

    gameboard.clearBoard();
    expect(gameboard.ships.length).toBe(0);
    expect(gameboard.shots.length).toBe(0);
  });
});
