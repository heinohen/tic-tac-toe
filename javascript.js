
//SETUP
const info = document.getElementById("info-area");
info.textContent = "HELLO, press STARTO! to start"


// counters
let roundCounter = 0;

// symbols

let symbol = "X";



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

console.log(gameboard);

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
    console.log("zero click!")
    playRound();
    zero.textContent = symbol
    gameboard[0] = symbol
    zero.disabled = true;
    console.log(gameboard);
    checkForWinner();
});
const one = document.querySelector('#one');
one.addEventListener("click", () => {
    console.log("one click!")
    playRound();
    one.textContent = symbol
    gameboard[1] = symbol
    one.disabled = true;
    console.log(gameboard);
    checkForWinner();
});

const two = document.querySelector('#two');
two.addEventListener("click", () => {
    console.log("two click!")
    playRound();
    two.textContent = symbol
    gameboard[2] = symbol
    two.disabled = true;
    console.log(gameboard);
    checkForWinner();
});

const three = document.querySelector('#three');
three.addEventListener("click", () => {
    console.log("three click!")
    playRound();
    three.textContent = symbol
    gameboard[3] = symbol
    three.disabled = true;
    console.log(gameboard);
    checkForWinner();
});

const four = document.querySelector('#four');
four.addEventListener("click", () => {
    console.log("four click!")
    playRound();
    four.textContent = symbol
    gameboard[4] = symbol
    four.disabled = true;
    console.log(gameboard);
    checkForWinner();

});

const five = document.querySelector('#five');
five.addEventListener("click", () => {
    console.log("five click!")
    playRound();
    five.textContent = symbol
    gameboard[5] = symbol
    five.disabled = true;
    console.log(gameboard);
    checkForWinner();
});

const six = document.querySelector('#six');
six.addEventListener("click", () => {
    console.log("six click!")
    playRound();
    six.textContent = symbol
    gameboard[6] = symbol
    six.disabled = true;
    console.log(gameboard);
    checkForWinner();
});

const seven = document.querySelector('#seven');
seven.addEventListener("click", () => {
    console.log("seven click!")
    playRound();
    seven.textContent = symbol
    gameboard[7] = symbol
    seven.disabled = true;
    console.log(gameboard);
    checkForWinner();
});

const eight = document.querySelector('#eight');
eight.addEventListener("click", () => {
    console.log("eight click!")
    playRound();
    eight.textContent = symbol
    gameboard[8] = symbol
    eight.disabled = true;
    console.log(gameboard);
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
}


function playRound() {
    if (roundCounter % 2 == 0) {
        symbol = "X";
        console.log(roundCounter, symbol);
        roundCounter++;
    }
    else {
        symbol = "O";
        console.log(roundCounter, symbol);

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
                return true;
            }
        }
        else {
            if (gameboard[diagNumber + 2] === startSymbol && gameboard[diagNumber + 4] === startSymbol) {
                return true;
            }
        }
        diagNumber += 2;
    }
}

// check for winner
function checkForWinner() {
    if (checkRows() == true || checkCols() == true || checkDiag() == true) {
        console.log("Winner!");
        let x = document.getElementsByClassName("btn");
        for (let i = 0; i < x.length; i++) {
            x[i].disabled = true;
            x[i].style.background = "#550077";

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