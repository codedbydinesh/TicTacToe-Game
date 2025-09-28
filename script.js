let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#rst-btn');

let reStartGame = document.querySelector('#restart');
let msgContainer = document.querySelector('.winner-msg');
// let msg = document.querySelector('#msg');
let win = document.querySelector('#winner');
let gameOverDiv = document.querySelector('.game-over-div');
let gameOverMsg = document.querySelector('#game-over-msg');
let restartAfterOver = document.querySelector('#restartAfterOver');

let turnO = true;   // player 1 and player 2

// all possible winning patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// disable boxes function
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
// enable boxes function
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}
// show winner function
const showWinner = (winner) => {
    win.innerText = `${winner}`
    msgContainer.classList.remove('hide')
}

// game over function
const gameOver = (over) => {
    gameOverMsg.innerText = `${over}`
    gameOverDiv.classList.remove('hide')
}

// check for winner
const checkWinner = () => {
    let winnerFound = false;
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        if (pos1Val !== '' && pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("Winner");
            showWinner(pos1Val);
            disabledBoxes();
            winnerFound = true;
            break;
        }


    }
// check for draw if no winner found
    if (!winnerFound) {
        let isDraw = true;
        for (let box of boxes) {
            if (box.innerText === '') {
                isDraw = false;
                break;
            }
        }
        
        if (isDraw) {
            gameOver("Game Over!! No Winner!");
            disabledBoxes();
        }
    }
}

// reset game and restart function
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

// reset game over function
const resetGameOver = () => {
    turnO = true;
    enableBoxes();
    gameOverDiv.classList.add('hide');
}

// main game logic
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box clicked');
        if (turnO) {
            box.innerText = 'O'
            turnO = false;
        } else {
            box.innerText = 'X'
            turnO = true
        }
        box.disabled = true
        checkWinner();
    })
})


// event listeners for buttons to reset and restart game
resetBtn.addEventListener('click', resetGame);
reStartGame.addEventListener('click', resetGame);
restartAfterOver.addEventListener('click', resetGameOver);