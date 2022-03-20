// setting variables.
const cells = document.querySelectorAll('.cell');
const announce = document.querySelector('.status');
const gameStatus = document.querySelector('#gameStatus');
const restartButton = document.querySelector('.restart');
const cell = [];
const winMSG = () => `${currentPlayer} has won`;
const currentTurn = () => `${currentPlayer}'s turn`;

let activeGame = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
// let computer = "O";



// board memo
//  [0,1,2]
//  [3,4,5]
//  [6,7,8]

// 8 different patterns to win
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]


function tickedCell(tickedCell, tickedCellIndex) {
  gameState[tickedCellIndex] = currentPlayer;
  tickedCell.innerHTML = currentPlayer;
}

function playerTurn() {
  currentPlayer = currentPlayer === "X" ? "Computer" : "X";
  announce.innerHTML = currentTurn();
}

// to win:

const toWin = () => {
     if (cell[0] === currentPlayer && cell[1] === currentPlayer && cell[2] === currentPlayer) {
      return true;
    }if (cell[3] === currentPlayer && cell[4] === currentPlayer && cell[5] === currentPlayer) {
      return true;
    }if (cell[6] === currentPlayer && cell[7] === currentPlayer && cell[8] === currentPlayer) {
      return true;
    }if (cell[0] === currentPlayer && cell[3] === currentPlayer && cell[6] === currentPlayer) {
      return true;
    }if (cell[1] === currentPlayer && cell[4] === currentPlayer && cell[7] === currentPlayer) {
      return true;
    }if (cell[2] === currentPlayer && cell[5] === currentPlayer && cell[8] === currentPlayer) {
      return true;
    }if (cell[0] === currentPlayer && cell[4] === currentPlayer && cell[8] === currentPlayer) {
      return true;
    }if (cell[2] === currentPlayer && cell[4] === currentPlayer && cell[6] === currentPlayer) {
      return true;
    }
    
    if (toWin) {
      gameStatus.innerText = `${currentPlayer} has won`;
      activeGame = false;
      return;
    }
    
};

// to draw:
const toDraw = () => {
  let draw = 0;
  cell.forEach((cell, i) => {
    if (cell[i] !== null) draw++;
  });
  if (draw === 9) {
    gameStatus.innerText = `Draw`;
    restart();
    announce.innerHTML = drawMsg();
    activeGame = false;
  }
};



// to Restart:
function restartGame() {
  activeGame = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  announce.innerHTML = currentTurn();
  document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}


function tickedCells(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('cell'));

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
      return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}




document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('restart').addEventListener('click', restartGame);

// Things to do
//   game must be turned on and off
//   cell should react when clicked
//   same cell cannot be clicked twice
//   status display 
//   reset button
//   read more about querySelector
//   players must alternate turn
//   alert, or foreach = try to use it
// https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn
// https://github.com/nemo0/tic-tac-toe/blob/master/script.js
// https://github.com/javascriptacademy-stash/tic-tac-toe/blob/master/index.js
// https://github.com/angle943/tic-tac-toe/blob/master/app.js