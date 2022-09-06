/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let xTurn 
let boardArr
let winner 


/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('#message')
const board = document.querySelector('.board')
const reset = document.querySelector('button')
const h1 = document.querySelector('h1')
const image = document.querySelector('body')


/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', function(evt) {
  handleClick(evt.target)
})

reset.addEventListener('click', function() {
  init()
  reset.setAttribute('hidden', 0)
})


/*-------------------------------- Functions --------------------------------*/
init()


function handleClick(square) {
  if (square.textContent || winner) {
    message.textContent = `That aint it!`
    return
  } 
  else {
    if (xTurn) {
      square.innerHTML = 'X'
      xTurn = !xTurn
      render('X')
    } 
    else if (!xTurn) {
      square.innerHTML = 'O'
      xTurn = !xTurn
      render('O')
    }
  }
}

function render(lastPlay) {
  for (i=0; i<9; i++) {
    if  (board.children[i].innerHTML === lastPlay)  {
      boardArr[i] = board.children[i].innerHTML
    } }
  checkWin('X')
  checkWin('O')
  if (winner === null)  {
    //keep playing
    if (xTurn)  {
      message.textContent = `It's X's turn!`
      image.style.backgroundImage = "url('https://c.stocksy.com/a/ZvJ800/z9/1983229.jpg')"
    } 
    else if (!xTurn) {
      message.textContent = `It's O's turn!`
      image.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQS68jZ4OoIuxA-iJJpl71QW1Oy3lEtw8sA&usqp=CAU')"
    }
  }
  else if (winner === true) {
    //renderWin
    image.style.backgroundImage = "url('https://as1.ftcdn.net/v2/jpg/02/89/02/42/1000_F_289024265_1O1FAY45Cc3qdc4fumUyS04wGbyaMQRE.jpg')"
    h1.textContent = `woo!`
    if (xTurn)  {
      h1.textContent = `Congratulations O, you won!`
      message.textContent = `Click 'Reset' to play again!`
    } else  {
      h1.textContent = `Congratulations X, you won!`
      message.textContent = `Click 'Reset' to play again!`
    }
    reset.removeAttribute('hidden')
  }
  else if (winner = 'tie')  {
    image.style.backgroundImage = "url('https://as1.ftcdn.net/v2/jpg/02/89/02/42/1000_F_289024265_1O1FAY45Cc3qdc4fumUyS04wGbyaMQRE.jpg')"
    h1.textContent = `It's a tie!`
    message.textContent = `Click 'Reset' to play again!`
    reset.removeAttribute('hidden')
    winner = null
  }
}

function pickStarter()  {
  let rand = Math.random()
  if (rand < .5)  {
    xTurn = true
  }  else  {
    xTurn = false
  }
}

function init()  {
  h1.textContent = 'Tic-Tac-Toe'
  message.textContent = `Click to play`
  xTurn = null
  boardArr = [null, null, null, null, null, null, null, null, null]
  for (i=0; i<9; i++) {
    board.children[i].innerHTML = boardArr[i]
  }
  winner = null
  pickStarter()
  render()
}

function checkWin(play) {
  if ((boardArr[0] === play && boardArr[3] === play && boardArr[6] === play)  )   {
    winner = true
  } 
  else if ((boardArr[1] === play && boardArr[4] === play && boardArr[7] === play)  )   {
    winner = true
  } 
  else if ((boardArr[2] === play && boardArr[5] === play && boardArr[8] === play)  )   {
    winner = true
  } 
  else if ((boardArr[0] === play && boardArr[1] === play && boardArr[2] === play)  )   {
    winner = true
  } 
  else if ((boardArr[3] === play && boardArr[4] === play && boardArr[6] === play)  )   {
    winner = true
  } 
  else if ((boardArr[6] === play && boardArr[7] === play && boardArr[8] === play)  )   {
    winner = true
  } 
  else if ((boardArr[0] === play && boardArr[4] === play && boardArr[8] === play)  )   {
    winner = true
  } 
  else if ((boardArr[2] === play && boardArr[4] === play && boardArr[6] === play)  )   {
    winner = true
  }
  else if (boardArr[0] && boardArr[1] && boardArr[2] && boardArr[3] && boardArr[4] && boardArr[5] && boardArr[6] && boardArr[7] && boardArr[8])  {
    winner = 'tie'
  }
}