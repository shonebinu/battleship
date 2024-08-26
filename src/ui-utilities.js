class UIUtilities {
  constructor(parentEl, player) {
    this.parentEl = parentEl;
    this.player = player;
  }

  drawNameAndBoard() {
    this.drawName();
    this.drawBoard();
  }

  drawName() {
    const nameP = this.parentEl.querySelector(".name");
    nameP.textContent = this.player.name;
  }

  drawBoard(size = 10) {
    const board = this.parentEl.querySelector(".board");
    board.innerHTML = "";

    for (let i = 0; i < size; i++) {
      const row = document.createElement("div");

      for (let j = 0; j < size; j++) {
        const box = document.createElement("div");
        box.setAttribute("data-x", i);
        box.setAttribute("data-y", j);
        row.appendChild(box);
      }

      board.appendChild(row);
    }

    if (this.player.name !== "Machine") this.labelShips();
    this.labelHits();
    this.labelShots();
  }

  labelShips() {
    const shipsEntry = this.player.getGameboard().getShips() ?? [];

    for (let { coordinates } of shipsEntry) {
      for (let coord of coordinates) {
        const box = this.parentEl.querySelector(
          `div[data-x='${coord[0]}'][data-y='${coord[1]}']`,
        );
        box.classList.toggle("ship");
      }
    }
  }

  labelHits() {
    const scoredShots =
      this.player.getGameboard().getScoredShots().values() ?? [];

    for (const coords of scoredShots) {
      for (const coord of coords) {
        const box = this.parentEl.querySelector(
          `div[data-x='${coord[0]}'][data-y='${coord[1]}']`,
        );
        box.classList.toggle("hit");
      }
    }
  }

  labelShots() {
    const missedCoords = this.player.getGameboard().getMissedShots();

    for (const coord of missedCoords) {
      const box = this.parentEl.querySelector(
        `div[data-x='${coord[0]}'][data-y='${coord[1]}']`,
      );
      box.classList.toggle("miss");
    }
  }
}

export { UIUtilities };
