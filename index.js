// setting variables
let gameOn = true;
let currentPlayer = "X";
let gameState = 
["", "", "",
 "", "", "",
 "", "", ""];

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

const announce = document.querySelector('.status');

function tickCells(tickedCell, tickedCellIndex) {
  gameState[tickedCellIndex] = currentPlayer;
  tickedCell.innerHTML = currentPlayer;
}

const winMsg = () => `${currentPlayer} has won`;
const drawMsg = () => `Draw`;
const currentTurnMsg = () => `${currentPlayer}'s turn`;

function playerTurn() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  announce.innerHTML = currentTurnMsg();
}

function resultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        announce.innerHTML = winMsg();
        gameOn = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        announce.innerHTML = drawMsg();
        gameOn = false;
        return;
    }

    playerTurn();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameOn) {
        return;
    }

    tickCells(clickedCell, clickedCellIndex);
    resultValidation();
}

announce.innerHTML = currentTurnMsg();

function handleRestartGame() {
    gameOn = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    announce.innerHTML = currentTurnMsg();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restart').addEventListener('click', handleRestartGame);