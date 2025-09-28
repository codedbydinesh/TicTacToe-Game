let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#rst-btn');

let reStartGame = document.querySelector('#restart');
let msgContainer = document.querySelector('.winner-msg');
let msg = document.querySelector('#msg');
let win = document.querySelector('#winner');


let trunO = true;   // player 1 and player 2


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner = (winner) => {
    win.innerText = `${winner}`
    msgContainer.classList.remove('hide')
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner");
                showWinner(pos1Val);
                disabledBoxes();
            }
        }
        
    }
}

const resetGame = () => {
    trunO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        console.log('box clicked');
        if(trunO){
            box.innerHTML = 'O'
            trunO = false;
        }else{
            box.innerHTML = 'X'
            trunO = true
        }
        box.disabled = true
        checkWinner();
    })
})

resetBtn.addEventListener('click', resetGame);
reStartGame.addEventListener('click',resetGame)