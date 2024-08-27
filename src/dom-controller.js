class DOMController {
  static drawBoard(parentEl, size = 10) {
    parentEl.innerHTML = "";
    for (let i = 0; i < size; i++) {
      const row = document.createElement("div");
      for (let j = 0; j < size; j++) {
        const box = document.createElement("div");
        box.setAttribute("data-x", i);
        box.setAttribute("data-y", j);
        row.appendChild(box);
      }
      parentEl.appendChild(row);
    }
  }

  static drawShips(parentEl, ships) {
    for (const [x, y] of ships) {
      parentEl
        .querySelector(`div[data-x='${x}'][data-y='${y}']`)
        .classList.toggle("ship");
    }
  }

  static drawShots(parentEl, shots) {
    for (const [x, y] of shots) {
      parentEl
        .querySelector(`div[data-x='${x}'][data-y='${y}']`)
        .classList.toggle("shot");
    }
  }
}

export { DOMController };
