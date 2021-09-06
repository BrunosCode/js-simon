// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. generate random number
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let number1 = randomNumber(0, 99);
let number2 = randomNumber(0, 99);
let number3 = randomNumber(0, 99);
let number4 = randomNumber(0, 99);
let number5 = randomNumber(0, 99);

// 2. alert 5 random number
alert("remember these numbers");
alert(`${number1} - ${number2} - ${number3} - ${number4} - ${number5}`);

// 3. set a timer of 30 seconds
setTimeout( () => {
    // 4. ask (prompt) which number the user remember, one by one
    let userNumber1 = +prompt("Tell me the 1st number");
    let userNumber2 = +prompt("Tell me the 2nd number");
    let userNumber3 = +prompt("Tell me the 3rd number");
    let userNumber4 = +prompt("Tell me the 4th number");
    let userNumber5 = +prompt("Tell me the 5th number");
    // 5. comunicate the result of the test to the user
    let noMistakes = true;
    if ( number1 !== userNumber1 ) { 
        alert("The 1st number is wrong");
        noMistakes = false;
    }
    if ( number2 !== userNumber2 ) { 
        alert("The 2nd number is wrong");
        noMistakes = false; 
    }
    if ( number3 !== userNumber3 ) { 
        alert("The 3rd number is wrong");
        noMistakes = false;
    }
    if ( number4 !== userNumber4 ) { 
        alert("The 4th number is wrong");
        noMistakes = false; 
    }
    if ( number5 !== userNumber5 ) { 
        alert("The 5th number is wrong");
        noMistakes = false; 
    }

    if ( noMistakes ) {
        alert("Well done!!!");
    } else {
        alert("Refresh and try again")
    }
}, 30000)