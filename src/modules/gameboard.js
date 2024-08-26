class Gameboard {
  #ships = [];
  #missedShots = [];
  #scoredShots = new Map();

  placeShip(ship, coordinates) {
    if (ship.length !== coordinates.length)
      throw new Error(
        "Length of the ship should be same as length of the given coordinates",
      );

    if (this.#ships.find(({ ship: shipItem }) => shipItem === ship))
      throw new Error("Same ship exists within the gameboard");

    for (const { coordinates: existingCoordinates } of this.#ships) {
      for (const coord of coordinates) {
        if (
          existingCoordinates.some(
            (existingCoord) =>
              existingCoord[0] === coord[0] && existingCoord[1] === coord[1],
          )
        )
          throw new Error("The ship overlaps with another ship");
      }
    }

    this.#ships.push({ ship, coordinates });
  }

  receiveAttack(coordinate) {
    const hitShip = this.#ships.find((shipEntry) =>
      shipEntry.coordinates.some(
        (coord) => coord[0] === coordinate[0] && coord[1] === coordinate[1],
      ),
    );

    if (hitShip) {
      hitShip.ship.hit();
      this.#scoredShots.set(hitShip.ship, [
        ...(this.#scoredShots.get(hitShip.ship) ?? []),
        coordinate,
      ]);
      return true;
    }

    this.#missedShots.push(coordinate);
    return false;
  }

  isShipsSunk() {
    return this.#ships.every(({ ship }) => ship.isSunk());
  }

  getShips() {
    return this.#ships;
  }

  getMissedShots() {
    return this.#missedShots;
  }

  getScoredShots() {
    return this.#scoredShots;
  }
}

export { Gameboard };