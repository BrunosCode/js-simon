// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// 0. SHORTCUT VARIABLES
const startBtn = document.getElementById("start-btn");

const instructionRow = document.getElementById("instruction-row");
const countDown = document.getElementById("count-down");

const numbersRow = document.getElementById("numbers-row");

const inputsRow = document.getElementById("inputs-row");

const submitBtn = document.getElementById("submit-btn");

const results = document.getElementById("results-col");

const restartBtn = document.getElementById("restart-btn");

// FUNCTIONS
// 1. generate random number
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const show = (element) => {
    element.classList.remove("hide");
} 
const hide = (element) => {
    element.classList.add("hide");
} 

// GAMES VARIABLE
let level = 5;
let numbers = [];
let userNumbers = [];

// GAME SCRIPT: FIRST PART
const startGame = () => {

    numbers = [];
    for (let i = 0; i < level; i++) {
        let number = randomNumber(0, 9);
        numbers.push(number);
        numbersRow.innerHTML += `<div>${number}</div>`;
    }
    console.log(numbers)
    
    // Hide startBtn 
    hide(startBtn);
    // Show numbersRow
    show(numbersRow);

    // Set Istructions
    instructionRow.innerHTML = `<h1>Remember these numbers in <span id="count-down">30</span> seconds</h1>`;
    
    // 3. set a timer of 30 seconds
    setTimeout( () => {
    
        // Hide instrucionRow and numberRow
        hide(numbersRow);
        // Show inputsRow and submitBtn
        show(inputsRow);
        show(submitBtn);
    
        // Set Istructions
        instructionRow.innerHTML = `<h1>Enter the numbers you remember</h1>`;

        // clean inputs row
        inputsRow.innerHTML = "";

        // 4. Generate html inputs
        for (let i = 0; i < level; i++) {    
            inputsRow.innerHTML += `<input type="text" name="number">`;
        }
    
    }, 3000);
}

// GAME SCRIPT: SECOND PART
const endGame = () => {

    // get user inputs
    userNumbers = [];
    for (let i = 0; i < level; i++) {
        console.log(+inputsRow.childNodes[i].value);
        userNumbers.push(+inputsRow.childNodes[i].value);
    }
    
    // Hide inputsRow and submitRow
    hide(inputsRow);
    hide(submitBtn);
    hide(instructionRow)

    // Show results
    show(results);
    show(restartBtn);
    
    // Set Istructions
    instructionRow.innerHTML = "";

    // 5. comunicate each error to the user
    let noMistakes = true;
    for (let i = 0; i < level; i++) {
        if ( userNumbers[i] !== numbers[i] ) {
            noMistakes = false;
            switch (i) {
                case 0: 
                    results.innerHTML += "<div>The 1st number is wrong</div>";
                    break;
                case 1: 
                    results.innerHTML += "<div>The 2nd number is wrong</div>";
                    break;
                case 2: 
                    results.innerHTML += "<div>The 3rd number is wrong</div>";
                    break;
                default: 
                    results.innerHTML += `<div>The ${i + 1}th number is wrong</div>`;
            }
        }
    }
    
    // Show the result
    if ( noMistakes ) {
        results.innerHTML = "<h2>Well done!!!</h2>" + results.innerHTML;

        // If user wins the game add 1 level
        level++;
    } else {
        results.innerHTML = "<h2>Try again</h2>" + results.innerHTML;
    }
}

// START BUTTON
startBtn.addEventListener( "click", startGame );


// SUBMIT BUTTON
submitBtn.addEventListener( "click", endGame );

// RESTART BUTTON
restartBtn.addEventListener( "click", () => {

    // Hide results
    hide(results);
    hide(restartBtn);
    // Show startCol and instructionRow
    show(instructionRow);
    show(startBtn);

    // Set Istructions
    instructionRow.innerHTML = `<h1>Click to play</h1>`;

    // Remove injected html
    numbersRow.innerHTML = "";
    inputsRow.innerHTML = "";
    results.innerHTML = "";

    startGame();
});