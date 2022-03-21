// setting variables.
const cells = document.querySelectorAll('.cell');
const announce = document.querySelector('.status');
// const restartButton = document.querySelector('.restart');
const cell = [];

const winMsg = () => `${currentPlayer} has won`;
const drawMsg = () => `Draw`;
const currentTurnMsg = () => `${currentPlayer}'s turn`;

announce.innerHTML = currentTurnMsg();

let activeGame = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
// let computer = "O";



// board memo
//  [0,1,2]
//  [3,4,5]
//  [6,7,8]

// const winPossibility = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

function tickCells(tickedCell, tickedCellIndex) {
  gameState[tickedCellIndex] = currentPlayer;
  tickedCell.innerHTML = currentPlayer;
}

function playerTurn() {
  currentPlayer = currentPlayer === "X" ? "Computer" : "X";
  announce.innerHTML = currentTurnMsg();
}

// to win:
function resultValidation() {
 let winning = false;
const toWin = () => {
     if (cell[0] === currentPlayer && cell[1] === currentPlayer && cell[2] === currentPlayer) {
      return winning = true;
    }if (cell[3] === currentPlayer && cell[4] === currentPlayer && cell[5] === currentPlayer) {
      return winning =  true;
    }if (cell[6] === currentPlayer && cell[7] === currentPlayer && cell[8] === currentPlayer) {
      return winning = true;
    }if (cell[0] === currentPlayer && cell[3] === currentPlayer && cell[6] === currentPlayer) {
      return winning = true;
    }if (cell[1] === currentPlayer && cell[4] === currentPlayer && cell[7] === currentPlayer) {
      return winning = true;
    }if (cell[2] === currentPlayer && cell[5] === currentPlayer && cell[8] === currentPlayer) {
      return winning = true;
    }if (cell[0] === currentPlayer && cell[4] === currentPlayer && cell[8] === currentPlayer) {
      return winning = true;
    }if (cell[2] === currentPlayer && cell[4] === currentPlayer && cell[6] === currentPlayer) {
      return winning = true;
    }
    
    if (winning) {
      announce.innerText = winMsg();
      activeGame = false;
      return;
    }
    
    // to draw:
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }



function tickedCells(tickedCellEvent) {
  const tickedCell = tickedCellEvent.target;
  const tickedCellIndex = parseInt(tickedCell.getAttribute('data-cell-index'));

  if (gameState[tickedCellIndex] !== "" || !activeGame) {
      return;
  }

  tickCells(tickedCell, tickedCellIndex);
  resultValidation();
}

// to Restart:
function restartGame() {
  activeGame = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  announce.innerHTML = currentTurnMsg();
  document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', tickedCells));
document.querySelector('.restart').addEventListener('click', restartGame);

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
// https://github.com/angle943/tic-tac-toe/blob/master/app.js}
