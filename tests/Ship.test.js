import { Ship } from "../src/modules/Ship";

describe("Ship class", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(3);
  });

  test("should not sink when hit is less than length", () => {
    expect(ship.isSunk()).toBe(false);

    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("should sink when hit is greater than equal to length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("hit should return true if hit is less than length", () => {
    expect(ship.hit()).toBe(true);
  });

  test("hit should return false if hit is greater than equal to length", () => {
    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.hit()).toBe(false);
  });

  test("hits should be updated correctly", () => {
    ship.hit();
    expect(ship.hits).toBe(1);

    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test("length should be set correctly", () => {
    expect(ship.length).toBe(3);
  });
});
