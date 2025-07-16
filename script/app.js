// script/app.js (partial)

function init() {
  const square = document.querySelectorAll('.sqr');
  const message = document.getElementById('message');
  let board = Array(16).fill('');
  let currentPlayer = 'X';
  let gameOver = false;

  function renderBoard() {
    for (let i = 0; i < board.length; i++) {
      square[i].textContent = board[i];
    }
  }

  renderBoard();
  message.textContent = `${currentPlayer}'s turn`;
}

document.addEventListener('DOMContentLoaded', init);
