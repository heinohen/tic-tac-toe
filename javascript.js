
//SETUP
const info = document.getElementById("info-area");
info.textContent = "HELLO, press PLAY! to start"

const commentator = document.getElementById("commentator");




// counters
let roundCounter = 0;

// symbols

let symbol = "X";
let winSymbol;

// X color #1df500
// Y color #f50000
const xColor = "#1df500";
const yCOlor = "#f50000";
let winColor = "";




//creates empty board with placeholder "-"

let gameboard = new Array(9);

gameboard[0] = ".";
gameboard[1] = ".";
gameboard[2] = ".";

gameboard[3] = ".";
gameboard[4] = ".";
gameboard[5] = ".";

gameboard[6] = ".";
gameboard[7] = ".";
gameboard[8] = ".";


// start button

const startButton = document.getElementById("starto");
startButton.addEventListener("click", () => {
    startGame();
    startButton.disabled = true;
})

// reset button

const resetButton = document.getElementById("reseto");
resetButton.addEventListener("click", () => {
    resetGame();
})

// gameboard buttons

const zero = document.querySelector('#zero');
zero.addEventListener("click", () => {
    playRound();
    zero.textContent = symbol
    gameboard[0] = symbol
    zero.disabled = true;
    checkForWinner();
});
const one = document.querySelector('#one');
one.addEventListener("click", () => {
    playRound();
    one.textContent = symbol
    gameboard[1] = symbol
    one.disabled = true;
    checkForWinner();
});

const two = document.querySelector('#two');
two.addEventListener("click", () => {
    playRound();
    two.textContent = symbol
    gameboard[2] = symbol
    two.disabled = true;
    checkForWinner();
});

const three = document.querySelector('#three');
three.addEventListener("click", () => {
    playRound();
    three.textContent = symbol
    gameboard[3] = symbol
    three.disabled = true;
    checkForWinner();
});

const four = document.querySelector('#four');
four.addEventListener("click", () => {
    playRound();
    four.textContent = symbol
    gameboard[4] = symbol
    four.disabled = true;
    checkForWinner();

});

const five = document.querySelector('#five');
five.addEventListener("click", () => {
    playRound();
    five.textContent = symbol
    gameboard[5] = symbol
    five.disabled = true;
    checkForWinner();
});

const six = document.querySelector('#six');
six.addEventListener("click", () => {
    playRound();
    six.textContent = symbol
    gameboard[6] = symbol
    six.disabled = true;
    checkForWinner();
});

const seven = document.querySelector('#seven');
seven.addEventListener("click", () => {
    playRound();
    seven.textContent = symbol
    gameboard[7] = symbol
    seven.disabled = true;
    checkForWinner();
});

const eight = document.querySelector('#eight');
eight.addEventListener("click", () => {
    playRound();
    eight.textContent = symbol
    gameboard[8] = symbol
    eight.disabled = true;
    checkForWinner();
});

function activateButtons() {
    let x = document.getElementsByClassName("btn");
    for (let i = 0; i < x.length; i++) {
        x[i].disabled = false;
    }
}

function disableButtons() {
    let x = document.getElementsByClassName("btn");
    for (let i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
}

function startGame() {
    activateButtons();
    info.textContent = "Game on, good luck!"
    commentator.textContent = `${symbol} goes first!`;
}


function playRound() {
    commentator.textContent = "";
    if (roundCounter % 2 == 0) {
        symbol = "X";
        roundCounter++;
    }
    else {
        symbol = "O";
        roundCounter++;
    }

}






// check rows

function checkRows() {
    var rowNumber = 0;


    while (rowNumber < 9) {
        let startSymbol = gameboard[rowNumber];
        if (gameboard[rowNumber] === ".") {
            rowNumber += 3;
            continue;
        }
        if (gameboard[rowNumber + 1] === startSymbol && gameboard[rowNumber + 2] === startSymbol) {
            winSymbol = startSymbol;
            return true;
        }
        rowNumber += 3;
    }

}

function checkCols() {
    var colNumber = 0;

    while (colNumber < 3) {
        let startSymbol = gameboard[colNumber];
        if (gameboard[colNumber] === ".") {
            colNumber++;
            continue;
        }

        if (gameboard[colNumber + 3] === startSymbol && gameboard[colNumber + 6] === startSymbol) {
            winSymbol = startSymbol;
            return true;
        }
        colNumber++;
    }

}

function checkDiag() {
    var diagNumber = 0;

    while (diagNumber < 3) {
        let startSymbol = gameboard[diagNumber];
        if (startSymbol === ".") {
            diagNumber += 2;
            continue;
        }
        if (diagNumber === 0) {

            if (gameboard[diagNumber + 4] === startSymbol && gameboard[diagNumber + 8] === startSymbol) {
                winSymbol = startSymbol;
                return true;
            }
        }
        else {
            if (gameboard[diagNumber + 2] === startSymbol && gameboard[diagNumber + 4] === startSymbol) {
                winSymbol = startSymbol;
                return true;
            }
        }
        diagNumber += 2;
    }
}

// check for winner
function checkForWinner() {
    if (checkRows() || checkCols() || checkDiag()) {
        info.textContent = `${winSymbol} has won!`
        if (winSymbol === "X") {
            winColor = xColor;
        } 
        else {
            winColor = yCOlor;
        }
        let x = document.getElementsByClassName("btn");
        for (let i = 0; i < x.length; i++) {
            x[i].disabled = true;
            x[i].style.background = winColor;

        }
    }
}

// STYLING AND HTML CONTENT!
//footer

const footer = document.querySelector('.footer');
const footerLegal = document.createElement('div');
footer.appendChild(footerLegal);

const footerPara = document.createElement('p')
footerPara.textContent = " (c) heinohen 2022";
footerLegal.appendChild(footerPara);

const footerGit = document.createElement('a')

footerGit.href = "https://github.com/heinohen"
const footerImg = document.createElement('img')
footerImg.src = "./images/git.png";
footerImg.alt = "gitcat";
footerGit.setAttribute('id', 'gitlink');
footerGit.appendChild(footerImg);
footer.appendChild(footerGit);

disableButtons();