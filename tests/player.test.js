import { Player } from "../src/modules/player";
import { Gameboard } from "../src/modules/gameboard";

describe("Player", () => {
  let player;
  let gameboard;
  let enemyPlayer;
  let enemyGameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
    enemyGameboard = new Gameboard();
    player = new Player("John Doe", gameboard);
    enemyPlayer = new Player("Jane Doe", enemyGameboard);
  });

  test("should create a player with a name and a gameboard", () => {
    expect(player.name).toBe("John Doe");
    expect(player.gameboard).toBe(gameboard);
  });

  test("should call receiveAttack on gameboard", () => {
    const coordinates = [1, 2];
    const receiveAttackSpy = jest.spyOn(gameboard, "receiveAttack");
    player.receiveAttack(coordinates);
    expect(receiveAttackSpy).toHaveBeenCalledTimes(1);
    expect(receiveAttackSpy).toHaveBeenCalledWith(coordinates);
  });

  test("should call receiveAttack on enemy player's gameboard", () => {
    const coordinates = [3, 4];
    const receiveAttackSpy = jest.spyOn(enemyGameboard, "receiveAttack");
    player.attackEnemy(enemyPlayer, coordinates);
    expect(receiveAttackSpy).toHaveBeenCalledTimes(1);
    expect(receiveAttackSpy).toHaveBeenCalledWith(coordinates);
  });

  test("should place ships randomly on gameboard", () => {
    const ships = [{ length: 2 }, { length: 3 }];
    const placeShipSpy = jest.spyOn(gameboard, "placeShip");
    player.placeShipsRandomly(ships);
    expect(placeShipSpy).toHaveBeenCalledTimes(2);
  });
});
