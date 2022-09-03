/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let xTurn, isWinner


/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('#message')
const board = document.querySelector('.board')
const sq0 = document.querySelector('#sq0')
const sq1 = document.querySelector('#sq1')
const sq2 = document.querySelector('#sq2')
const sq3 = document.querySelector('#sq3')
const sq4 = document.querySelector('#sq4')
const sq5 = document.querySelector('#sq5')
const sq6 = document.querySelector('#sq6')
const sq7 = document.querySelector('#sq7')
const sq8 = document.querySelector('#sq8')
const reset = document.querySelector('button')


/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', function(evt) {
  square = evt.target
  if (xTurn) {
    xCheck(square)
  }
  else if (xTurn === false)  {
    oCheck(square)
  }
})
reset.addEventListener('click', function() {
  clearBoard()
  start()
  reset.setAttribute('hidden', 0)
})


/*-------------------------------- Functions --------------------------------*/
start()


function start()  {
  message.textContent = 'Click to play!'
  pickStarter()
}

function pickStarter()  {
  let rand = Math.random()
  if (rand < .5)  {
    xTurn = true
  }  else  {
    xTurn = false
  }
}

//xCheck and yCheck will handle all the state changes for a click
function xCheck(square)  {
  if (square.textContent && xTurn === true) {
    message.textContent = `That aint it!`
  }  else {
  message.textContent = `It's O's turn!`
  square.textContent = 'X'
  xTurn = false
  checkWin('X')
  }
}
function oCheck(square)  {
  if (square.textContent && xTurn === false) {
    message.textContent = `That aint it!`
  }  else {
  message.textContent = `It's X's turn!`
  square.textContent = 'O'
  xTurn = true
  checkWin('O')
  }
}

function checkWin(play) {
  if (sq0.textContent === play && sq3.textContent === play && sq6.textContent === play) {
    message.textContent = `${play} won that game!`
    reset.removeAttribute('hidden')
  }
  else if (sq1.textContent === play && sq4.textContent === play && sq7.textContent === play) {
    message.textContent = `${play} won that game!`
    reset.removeAttribute('hidden')
  }
  else if (sq2.textContent === play && sq5.textContent === play && sq8.textContent === play) {
    message.textContent = `${play} won that game!`
    reset.removeAttribute('hidden')
  }
  else if (sq0.textContent === play && sq1.textContent === play && sq2.textContent === play) {
    message.textContent = `${play} won that game!`
    reset.removeAttribute('hidden')
  }
  else if (sq3.textContent === play && sq4.textContent === play && sq5.textContent === play) {
    message.textContent = `${play} won that game!`
    reset.removeAttribute('hidden')
  }
  else if (sq6.textContent === play && sq7.textContent === play && sq8.textContent === play) {
    message.textContent = `${play} won that game!`
    reset.removeAttribute('hidden')
  }
  else if (sq0.textContent === play && sq4.textContent === play && sq8.textContent === play) {
    message.textContent = `${play} won that game!`
    reset.removeAttribute('hidden')
  }
  else if (sq2.textContent === play && sq4.textContent === play && sq6.textContent === play) {
    message.textContent = `${play} won that game!`
    reset.removeAttribute('hidden')
  }
  else if (sq0.textContent && sq1.textContent && sq2.textContent && sq3.textContent && sq4.textContent && sq5.textContent && sq6.textContent && sq7.textContent && sq8.textContent)  {
    message.textContent = `That game was a tie!`
    reset.removeAttribute('hidden')
  }
}

function clearBoard() {
  sq0.textContent = ''
  sq1.textContent = ''
  sq2.textContent = ''
  sq3.textContent = ''
  sq4.textContent = ''
  sq5.textContent = ''
  sq6.textContent = ''
  sq7.textContent = ''
  sq8.textContent = ''
}