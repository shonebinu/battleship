import { Gameboard } from "../src/modules/gameboard";
import { Ship } from "../src/modules/ship";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("placeShip() throws Error if length of the ship and coordinates are not equal", () => {
    let ship = new Ship(3);
    expect(() => gameboard.placeShip(ship, [])).toThrow();
  });

  test("placeShip() throws Error if same ship is inserted more than once", () => {
    let ship = new Ship(3);
    expect(() => {
      gameboard.placeShip(ship, [
        [0, 0],
        [1, 0],
        [2, 0],
      ]);
      gameboard.placeShip(ship, [
        [0, 0],
        [1, 0],
        [2, 0],
      ]);
    }).toThrow();
  });

  test("placeShip() places a ship on the gameboard", () => {
    let ship = new Ship(3);
    gameboard.placeShip(ship, [
      [1, 1],
      [1, 2],
      [1, 3],
    ]);
    expect(gameboard.getShips().length).toBe(1);
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
    }).toThrow();
  });

  test("receiveAttack() receives an attack and updates the ship hit count", () => {
    let ship1 = new Ship(3);

    gameboard.placeShip(ship1, [
      [0, 0],
      [0, 1],
      [0, 2],
    ]);

    gameboard.receiveAttack([0, 0]);

    expect(ship1.hits).toBe(1);
  });

  test("receiveAttack() receives an attack and updates scoredShots map", () => {
    let ship1 = new Ship(3);

    gameboard.placeShip(ship1, [
      [0, 0],
      [0, 1],
      [0, 2],
    ]);

    gameboard.receiveAttack([0, 0]);

    expect(gameboard.getScoredShots().get(ship1)).toContainEqual([0, 0]);
  });

  test("receiveAttack() updates misedShots when attack misses", () => {
    gameboard.receiveAttack([0, 0]);

    expect(gameboard.getMissedShots()).toContainEqual([0, 0]);
  });

  test("isShipsSunk() returns true if all ships sunk", () => {
    expect(gameboard.isShipsSunk()).toBe(true);

    let ship1 = new Ship(2);
    let ship2 = new Ship(1);

    gameboard.placeShip(ship1, [
      [0, 0],
      [0, 1],
    ]);
    gameboard.placeShip(ship2, [[1, 1]]);

    for (const coord of [
      [0, 0],
      [0, 1],
      [1, 1],
    ])
      gameboard.receiveAttack(coord);

    expect(gameboard.isShipsSunk()).toBe(true);
  });
});
