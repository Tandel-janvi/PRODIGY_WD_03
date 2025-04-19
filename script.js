let currentPlayer = 'X';
let gameStatus = ['','','','','','','','',''];
let gameActive = true;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function ClickCell(cellIndex) {
  if (gameActive && gameStatus[cellIndex] === '') {
    gameStatus[cellIndex] = currentPlayer;
    document.getElementById(`cell-${cellIndex}`).textContent = currentPlayer;
    if (checkWin()) {
      document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (!gameStatus.includes('')) {
      document.getElementById('status').textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  return winningConditions.some(condition => {
    return condition.every(index => {
      return gameStatus[index] === currentPlayer;
    });
  });
}

function resetGame() {
  currentPlayer = 'X';
  gameStatus = ['','','','','','','','',''];
  gameActive = true;
  document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
  document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = '';
  });
}
