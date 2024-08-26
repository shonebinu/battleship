class Player {
  #name;
  #gameboard;

  constructor(name, gameboard) {
    this.#name = name;
    this.#gameboard = gameboard;
  }

  get name() {
    return this.#name;
  }

  getGameboard() {
    return this.#gameboard;
  }
}

export { Player };
