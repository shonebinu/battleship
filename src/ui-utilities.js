function drawNameAndBoard(parent, player) {
  drawName(parent, player);
  drawBoard(parent, player);
}

function drawName(parentEl, player) {
  const nameP = parentEl.querySelector(".name");
  nameP.textContent = player.name;
}

function drawBoard(parentEl, player, size = 10) {
  const board = parentEl.querySelector(".board");
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

  if (player.name !== "Machine") labelShips(board, player);
  labelHits(board, player);
  labelShots(board, player);
}

function labelShips(board, player) {
  const shipsEntry = player.getGameboard().getShips() ?? [];

  for (let { coordinates } of shipsEntry) {
    for (let coord of coordinates) {
      const box = board.querySelector(
        `div[data-x='${coord[0]}'][data-y='${coord[1]}']`,
      );
      box.classList.toggle("ship");
    }
  }
}

function labelHits(board, player) {
  const scoredShots = player.getGameboard().getScoredShots().values() ?? [];

  for (const coords of scoredShots) {
    for (const coord of coords) {
      const box = board.querySelector(
        `div[data-x='${coord[0]}'][data-y='${coord[1]}']`,
      );
      box.classList.toggle("hit");
    }
  }
}

function labelShots(board, player) {
  const missedCoords = player.getGameboard().getMissedShots();

  for (const coord of missedCoords) {
    const box = board.querySelector(
      `div[data-x='${coord[0]}'][data-y='${coord[1]}']`,
    );
    box.classList.toggle("miss");
  }
}

export { drawNameAndBoard, drawBoard };
