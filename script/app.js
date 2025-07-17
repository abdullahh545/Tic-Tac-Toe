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
    console.log(idx)
    console.log(board[idx])
    console.log(gameOver)
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
    currentPlayer = 'X'
    gameOver = false
    rendorBoard()
    message.textContent = `${currentPlayer}'s turn`;


  }

  square.forEach(sqr => sqr.addEventListener('click', handleClick))
  console.log(resetBtn)
  resetBtn.addEventListener('click', resetGame);

  

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
    [2, 4, 6]

  ]






  function create3x3Board() {
    console.log("aa")
    const container = document.querySelector('.grid3x3')
    console.log(container)
    if (container.children.length > 0) return
    for (let i = 0; i < 9; i++) {
      console.log('in for loop')
      const square = document.createElement('div')
      console.log(square)
      square.classList.add('sqr3')
      square.textContent = ''
      square.id = `${i}`
      square.addEventListener('Click', handleClick3x3)
      container.appendChild(square)

    }

    square3 = document.querySelectorAll('.sqr3')

    console.log(square3)

    square3.forEach(sqr3 => sqr3.addEventListener('click', handleClick3x3))

  }


  btn()

  function btn() {
    btn3x3.addEventListener('click', () => {
     isThreeByThree = true;
     audioElem2.play()
     resetGame3x3()
      create3x3Board()
      grid4x4.style.display = 'none'
      grid3x3.style.display = 'grid'
      create3x3Board()


    })
    

    

    console.log(btn3x3)

    btn4x4.addEventListener('click', () => {
      audioElem2.play()
      isThreeByThree = false;
      resetGame()
      grid3x3.style.display = 'none'
      grid4x4.style.display = 'grid'

    })
  }


  function checkWinner3x3() {
    for (let combo of winningsCombos3x3) {
      const [a, b, c,] = combo;
      if (board3x3[a] && board3x3[a] === board3x3[b] && board3x3[b] === board3x3[c]) {

        gameOver3x3 = true;
        message.textContent = `${board3x3[a]} wins!`;
        return
      }

    }

    if (!board3x3.includes('')) {
      gameOver3x3 = true;
      message.textContent = "It's a draw!";
      return;
    }

  }

  create3x3Board()

  function handleClick3x3(e) {
    const idx = Number(e.target.id)
    console.log(board3x3)
    console.log(board3x3[idx])
    console.log(gameOver3x3)
    if(board3x3[idx]!= '' )
    {
      return
    }
    if (gameOver3x3 || board3x3[''])

      return;
     audioElem.pause()
      audioElem.currentTime = 0
      audioElem.play()


    board3x3[idx] = currentPlayer3x3;
    rendorBoard3x3()
    checkWinner3x3();

    if (!gameOver3x3) {
      currentPlayer3x3 = currentPlayer3x3 === 'X' ? 'O' : 'X';
      message.textContent = `${currentPlayer3x3}'s turn`;
    }
  }
  function rendorBoard3x3() {

    board3x3.forEach((tile, index) => {
      square3[index].textContent = tile
    })
  }

  function resetGame3x3() {
        document.getElementById('reset-sound').play();

    board3x3 = Array(9).fill('');
    currentPlayer3x3 = 'X'
    gameOver3x3 = false
    rendorBoard3x3()
    message.textContent = `${currentPlayer3x3}'s turn`;


  }

  // square3.forEach(sqr3 => sqr3.addEventListener('click', handleClick3x3))
  // console.log(square3)
  console.log(resetBtn)
  resetBtn.addEventListener('click', resetGame3x3);










}



document.addEventListener('DOMContentLoaded', init)



