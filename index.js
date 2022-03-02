let statusDisplay = document.querySelector('.status');
let gameActive = true;
let curPlyr = "X";
let gameStat = 
["", "", "",
 "", "", "",
 "", "", ""];


 
// board memo
//  012
//  345
//  678

const toWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function results(){
    let win = false;
    for (let i = 0; i <= 7; i++) {
        const winCond = toWin[i];
        let a = gameStat[winCond[0]];
        let b = gameStat[winCond[1]];
        let c = gameStat[winCond[2]];
        let d = gameStat[winCond[3]];
        let e = gameStat[winCond[4]];
        let f = gameStat[winCond[5]];
        let g = gameStat[winCond[6]];
        let h = gameStat[winCond[7]];
        let i = gameStat[winCond[8]];
        if (

        )
    }
}

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