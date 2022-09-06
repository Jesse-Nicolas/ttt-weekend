/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let xTurn 
let boardArr
let winner 


/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('#message')
const board = document.querySelector('.board')
const reset = document.querySelector('button')


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
  if (square.textContent) {
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
    }
  }
  console.log(boardArr)     //TEST
  checkWin('X')
  checkWin('O')
  if (winner === null)  {
    //keep playing
    if (xTurn)  {
      message.textContent = `It's X's turn!`
    } 
    else if (!xTurn) {
      message.textContent = `It's O's turn!`
    }
  }
  else if (winner === true) {
    //renderWin
    if (xTurn)  {
      message.textContent = `O won!`
    } else  {
      message.textContent = `X won!`
    }
    reset.removeAttribute('hidden')
  }
  else if (winner = 't')  {
    //renderTie
    message.textContent = `Issa tie!`
    reset.removeAttribute('hidden')
  }
}



function init()  {
  message.textContent = `Click to play`
  xTurn = null
  boardArr = [null, null, null, null, null, null, null, null, null]
  for (i=0; i<9; i++) {
    board.children[i].innerHTML = boardArr[i]
  }
  console.log(boardArr)     //TEST
  winner = null
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
    winner = 't'
  }
}


























