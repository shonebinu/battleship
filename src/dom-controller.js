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

  static drawName() {
    document.querySelector(".player1-name").textContent = "You";
    document.querySelector(".player2-name").textContent = "Machine";
  }

  static drawPreGameShips(lens) {
    const bigContainer = document.querySelector(".ships-container");
    const container = bigContainer.querySelector(".ships");

    const title = document.createElement("p");
    title.innerHTML =
      "Drag and drop the ships to your board.<br>Click on any ship on the sidebar to rotate.";
    title.classList.toggle("pre-title");
    bigContainer.appendChild(title);

    for (const len of lens) {
      const ship = document.createElement("div");
      ship.classList.add("draggable");
      ship.setAttribute("data-len", len);
      ship.setAttribute("data-orientation", "horizontal");
      ship.draggable = true;
      for (let i = 0; i < len; i++) {
        const box = document.createElement("div");
        ship.appendChild(box);
      }
      container.appendChild(ship);
    }

    const ships = document.querySelectorAll(".draggable");
    for (const ship of ships) {
      ship.addEventListener("click", () => {
        for (const s of ships) {
          const currentOrientation = s.getAttribute("data-orientation");
          s.setAttribute(
            "data-orientation",
            currentOrientation === "horizontal" ? "vertical" : "horizontal",
          );
        }
      });
    }
  }

  static drawPreGameRandomButton() {
    const pregame = document.querySelector(".pre-game");
    const button = document.createElement("button");
    button.textContent = "Place randomly";
    button.classList.add("random");
    pregame.appendChild(button);
  }

  static drawPreGameStartButton() {
    if (document.querySelector(".pre-game .start")) return;
    const pregame = document.querySelector(".pre-game");
    const button = document.createElement("button");
    button.textContent = "Start Game";
    button.classList.add("start");
    pregame.appendChild(button);
  }
}

export { DOMController };
