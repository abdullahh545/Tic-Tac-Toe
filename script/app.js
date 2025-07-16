function init() {
  const square = document.querySelectorAll('.sqr')
  let square3


  const message = document.getElementById('message')
  const resetBtn = document.getElementById('reset-btn')
  const btn3x3 = document.getElementById('btn3x3')
  const btn4x4 = document.getElementById('btn4x4')
  const grid3x3 = document.querySelector('.grid3x3')
  const grid4x4 = document.getElementById('board')
  const audioElem = document.getElementById('click-sound')
  const audioElem2 = document.getElementById('switch-sound')

  



  let board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  let gameOver = false
  let currentPlayer = 'X';
  let isThreeByThree = false



  const winningsCombos = [
    [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
    [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
    [0, 5, 10, 15], [3, 6, 9, 12]
  ];

  function rendorBoard() {
    for (let i = 0; i < board.length; i++) {
      square[i].textContent = board[i]
    }
    if (isThreeByThree) {
      for (let i = 0; i < 9; i++)
        square[i].textContent = board[i]
    } else {
      for (let i = 0; i < 16; i++) {
        square[i].textContent = board[i]
      }
    }
  }



  rendorBoard()
  function checkWinner() {
    for (let combo of winningsCombos) {
      const [a, b, c, d] = combo;
      if (
        board[a] &&
        board[a] === board[b] &&
        board[b] === board[c] &&
        board[c] === board[d]
      ) {
        gameOver = true;
        message.textContent = `${board[a]} wins!`;
        return
      }

    }

    if (!board.includes('')) {
      gameOver = true;
      message.textContent = "It's a draw!";
      return;
    }

  }


  function handleClick(e) {
    const idx = e.target.id;
    if(board[idx] != ''){
      return
    }
    if (gameOver || board[''])

      return;
      audioElem.pause()
      audioElem.currentTime = 0
      audioElem.play()


    board[idx] = currentPlayer;
    rendorBoard();
    checkWinner();

    if (!gameOver) {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.textContent = `${currentPlayer}'s turn`;
    }
  }
  function resetGame() {
    document.getElementById('reset-sound').play();
    board = Array(16).fill('');
    gameOver = false;
    currentPlayer = 'X'
    rendorBoard()
    message.textContent = `${currentPlayer}'s turn`;


  }

  square.forEach(sqr => sqr.addEventListener('click', handleClick))
  resetBtn.addEventListener('click', () => {
    if (isThreeByThree) {
      resetGame3x3()
    } else {
      resetGame()
    }
  });

  

  rendorBoard()
  message.textContent = `${currentPlayer}'s turn`;






  let board3x3 = Array(9).fill('')
  let currentPlayer3x3 = 'X'
  let gameOver3x3 = false

  const winningsCombos3x3 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
