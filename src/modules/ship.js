class Ship {
  #length;
  #hits;

  constructor(length) {
    if (length <= 0) throw new Error("Length of the Ship should be at-least 1");

    this.#length = length;
    this.#hits = 0;
  }

  get hits() {
    return this.#hits;
  }

  get length() {
    return this.#length;
  }

  hit() {
    if (this.#hits < this.#length) {
      this.#hits++;
      return true;
    }
    return false;
  }

  isSunk() {
    return this.#hits >= this.#length;
  }
}

export { Ship };
