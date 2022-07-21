const info = document.getElementById("info-area");
info.textContent = "HELLO!"



//creates empty board with placeholder "-"

let gameboard = Array(9);

gameboard[0] = "."
gameboard[1] = "."
gameboard[2] = "."

gameboard[3] = "."
gameboard[4] = "."
gameboard[5] = "."

gameboard[6] = "."
gameboard[7] = "."
gameboard[8] = "."

console.log(gameboard);



// buttons

const zero = document.querySelector('#zero');
zero.addEventListener("click", () => {
    console.log("zero click!")
    zero.textContent = "X"
    gameboard[0] = "X"
    zero.disabled = true;
    console.log(gameboard);
    checkForWinner();
});
const one = document.querySelector('#one');
one.addEventListener("click", () => {
    console.log("one click!")
    one.textContent = "X"
    gameboard[1] = "X"
    one.disabled = true;
    console.log(gameboard);
    checkForWinner();
});
const two = document.querySelector('#two');
two.addEventListener("click", () => {
    console.log("two click!")
    two.textContent = "X"
    gameboard[2] = "X"
    two.disabled = true;
    console.log(gameboard);
    checkForWinner();
});

const three = document.querySelector('#three');
three.addEventListener("click", () => {
    console.log("three click!")
    three.textContent = "X"
    gameboard[3] = "X"
    three.disabled = true;
    console.log(gameboard);
    checkForWinner();
});
const four = document.querySelector('#four');
four.addEventListener("click", () => {
    console.log("four click!")
    four.textContent = "X"
    gameboard[4] = "X"
    four.disabled = true;
    console.log(gameboard);
    checkForWinner();

});
const five = document.querySelector('#five');
five.addEventListener("click", () => {
    console.log("five click!")
    five.textContent = "X"
    gameboard[5] = "X"
    five.disabled = true;
    console.log(gameboard);
    checkForWinner();
});

const six = document.querySelector('#six');
six.addEventListener("click", () => {
    console.log("six click!")
    six.textContent = "X"
    gameboard[6] = "X"
    six.disabled = true;
    console.log(gameboard);
    checkForWinner();
});
const seven = document.querySelector('#seven');
seven.addEventListener("click", () => {
    console.log("seven click!")
    seven.textContent = "X"
    gameboard[7] = "X"
    seven.disabled = true;
    console.log(gameboard);
    checkForWinner();
});
const eight = document.querySelector('#eight');
eight.addEventListener("click", () => {
    console.log("eight click!")
    eight.textContent = "X"
    gameboard[8] = "X"
    eight.disabled = true;
    console.log(gameboard);
    checkForWinner();
});



// check rows

const checkRows = () => {
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

const checkCols = () => {
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

const checkDiag = () => {
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
const checkForWinner = () => {
    if (checkRows() == true || checkCols() == true || checkDiag() == true) {
        console.log("Winner!")
        let x = document.getElementsByClassName("btn");
        for (let i = 0; i < x.length; i++) {
            x[i].disabled = true;
        }
    }
}



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
footerGit.setAttribute('id','gitlink');
footerGit.appendChild(footerImg);
footer.appendChild(footerGit);