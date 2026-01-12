let title = document.querySelector(".title");
let squares = [];
let turn = "X";
let gameOver = false;

function TheEnd(winner, winningLine) {
  gameOver = true;

  if (winner) {
    winningLine.forEach((index) => {
      let cell = document.getElementById(`item${index + 1}`);
      cell.style.backgroundColor = "#4caf50";
      cell.style.color = "#fff";
    });
    title.innerHTML = `<span>${winner}</span> winner!<span id="dots"></span>`;
  } else {
    title.innerHTML = 'Draws! <span id="dots"></span>';
  }

  let dots = 0;
  const dotInterval = setInterval(() => {
    dots = (dots + 1) % 4;
    document.getElementById("dots").textContent = ".".repeat(dots);
  }, 1000);

  setTimeout(() => {
    location.reload();
  }, 4000);
}

function winner() {
  for (let i = 0; i < 9; i++) {
    squares[i] = document.getElementById(`item${i + 1}`).textContent;
  }

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winCombos) {
    const [a, b, c] = combo;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      TheEnd(squares[a], combo);
      return true;
    }
  }

  if (squares.every((cell) => cell)) {
    TheEnd(null);
    return true;
  }

  return false;
}

function game(cellId) {
  if (gameOver || turn !== "X") return;

  const cell = document.getElementById(cellId);
  if (cell.textContent !== "") return;

  cell.textContent = "X";
  if (winner()) return;

  turn = "O";
  setTimeout(makeRandomMoveForO, 500);
}

function makeRandomMoveForO() {
  if (gameOver) return;

  for (let i = 0; i < 9; i++) {
    squares[i] = document.getElementById(`item${i + 1}`).textContent;
  }

  const winMove = findBestMove("O");
  if (winMove !== null) return executeMove(winMove);

  const blockMove = findBestMove("X");
  if (blockMove !== null) return executeMove(blockMove);

  if (
    squares[4] === "O" &&
    ((squares[0] === "X" && squares[8] === "X") ||
      (squares[2] === "X" && squares[6] === "X"))
  ) {
    const sides = [1, 3, 5, 7];
    const emptySides = sides.filter((i) => !squares[i]);
    if (emptySides.length > 0) return executeMove(emptySides[0]);
  }

  if (!squares[4]) return executeMove(4);

  const corners = [0, 2, 6, 8];
  const emptyCorners = corners.filter((i) => !squares[i]);
  if (emptyCorners.length > 0)
    return executeMove(
      emptyCorners[Math.floor(Math.random() * emptyCorners.length)]
    );

  playRandomMove();

  if (winner()) return;
  turn = "X";
}

function findBestMove(player) {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winCombos) {
    const values = combo.map((i) => squares[i]);
    const playerCount = values.filter((v) => v === player).length;
    const emptyCount = values.filter((v) => v === "").length;

    if (playerCount === 2 && emptyCount === 1) {
      return combo.find((i) => !squares[i]);
    }
  }
  return null;
}

function executeMove(index) {
  const cell = document.getElementById(`item${index + 1}`);
  cell.textContent = "O";
  if (!winner()) turn = "X";
}

function playRandomMove() {
  const emptyCells = [];
  for (let i = 0; i < 9; i++) {
    if (!squares[i]) emptyCells.push(i);
  }

  if (emptyCells.length) {
    const randomIndex =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    document.getElementById(`item${randomIndex + 1}`).textContent = "O";
  }
}
