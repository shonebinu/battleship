class Ship {
  #length;
  #hits;

  constructor(length) {
    this.#length = length;
    this.#hits = 0;
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

  get hits() {
    return this.#hits;
  }

  get length() {
    return this.#length;
  }
}

export { Ship };
