import { Ship } from "../src/modules/ship";

describe("Ship", () => {
  let ship;
  let length;

  beforeEach(() => {
    length = 3;
    ship = new Ship(length);
  });

  test("isSunk() should return true if length <= hits", () => {
    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.isSunk()).toBe(true);
  });

  test("isSunk() should return false if hits < length", () => {
    expect(ship.isSunk()).toBe(false);

    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("hits getter should match the number of times hits fn called", () => {
    expect(ship.hits).toBe(0);

    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test("length getter should return the length of the ship", () => {
    expect(ship.length).toBe(3);
  });

  test("should throw an error when object is initialized with length less than 1", () => {
    expect(() => new Ship(0)).toThrow(Error);
  });
});
