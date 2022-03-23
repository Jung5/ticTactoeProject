const verify = [...document.querySelectorAll('.cell')];
const verify2 = document.getElementById('board')
const clear = document.getElementById('clean');
const announce = document.querySelector('.status');

let count = 1
verify2.addEventListener('click',(e)=>{
    if(count === 1 && e.target.innerHTML===''){
        e.target.innerHTML='X'
        count = 0
        announce.innerHTML = 'Player X turn'
    }else if(count === 0 && e.target.innerHTML===''){
        e.target.innerHTML="O"
        count = 1
        announce.innerHTML = 'Player O turn'
    }
})

clear.addEventListener('click',(e)=>{
    verify.forEach(item=> item.innerHTML="")
})



// let boxnum = 0;
// function clicekdCell (){
//     if (boxnum % 2 == 0 && this.textContent == '') {
//         this.textContent = 'X';
//         // statusDisplay.innerHTML = 'Player X turn'
//     }
//     if (boxnum % 2 == 1 && this.textContent == '') {
//         this.textContent = 'O';
//         // statusDisplay.innerHTML = 'Player X turn'
//     }
//     boxnum++
// };

let backend = [
    [null, null,null],
    [null, null,null],
    [null, null,null]
]
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


function resultValidation(){
    if((verify[0].textContent == 'X' && verify[1].textContent == 'X' && verify[2].textContent == 'X') || (verify[3].textContent == 'X' && verify[4].textContent == 'X' && verify[5].textContent == 'X') || (verify[6].textContent == 'X' && verify[7].textContent == 'X' && verify[8].textContent == 'X') || (verify[0].textContent == 'X' && verify[3].textContent == 'X' && verify[6].textContent == 'X') || (verify[1].textContent == 'X' && verify[4].textContent == 'X' && verify[7].textContent == 'X') || (verify[2].textContent == 'X' && verify[5].textContent == 'X' && verify[8].textContent == 'X') || (verify[0].textContent == 'X' && verify[4].textContent == 'X' && verify[8].textContent == 'X') || (verify[2].textContent == 'X' && verify[4].textContent == 'X' && verify[6].textContent == 'X')){
        announce.innerHTML = 'X wins';
        resetGrid();
    }

    else if((verify[0].textContent == 'O' && verify[1].textContent == 'O' && verify[2].textContent == 'O') || (verify[3].textContent == 'O' && verify[4].textContent == 'O' && verify[5].textContent == 'O') || (verify[6].textContent == 'O' && verify[7].textContent == 'O' && verify[8].textContent == 'O') || (verify[0].textContent == 'O' && verify[3].textContent == 'O' && verify[6].textContent == 'O') || (verify[1].textContent == 'O' && verify[4].textContent == 'O' && verify[7].textContent == 'O') || (verify[2].textContent == 'O' && verify[5].textContent == 'O' && verify[8].textContent == 'O') || (verify[0].textContent == 'O' && verify[4].textContent == 'O' && verify[8].textContent == 'O') || (verify[2].textContent == 'O' && verify[4].textContent == 'O' && verify[6].textContent == 'O')){
        announce.innerHTML = 'O wins';
        resetGrid();
    }
    else if(boxnum==9){
        announce.innerHTML = 'Draw';
        resetGrid();
    }
};

function resetGrid(){
    
    for(let i = 0; i < verify.length; i++){
        verify[i].textContent='';
        boxnum = 0;
    }
};

// for (let i = 0; 1 < verify.length; i++){
    
//     verify[i].addEventListener('click',clicekdCell); 
//     verify[i].addEventListener('click',resultValidation);
// }

let boxnum = 0;
function clicekdCell (){
    if (boxnum % 2 == 0 && this.textContent == '') {
        this.textContent = 'X';
        // statusDisplay.innerHTML = 'Player X turn'
    }
    if (boxnum % 2 == 1 && this.textContent == '') {
        this.textContent = 'O';
        // statusDisplay.innerHTML = 'Player X turn'
    }
    boxnum++
};



// status display needs to be added
// reset button is broken.-