import { Player } from "../src/modules/player";
import { Gameboard } from "../src/modules/gameboard";

describe("Player", () => {
  let player;
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
    player = new Player("John Doe", gameboard);
  });

  test("should create a player with a name and a gameboard", () => {
    expect(player.name).toBe("John Doe");
    expect(player.getGameboard()).toBe(gameboard);
  });
});
