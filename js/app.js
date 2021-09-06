// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let level = 0;
let levelNumbers = level + 5;

// 1. generate random number
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let numbers = []
for (let i = 0; i < levelNumbers; i++) {
    numbers.push(randomNumber(0, 99));
}

// 2. alert 5 random number
alert("remember these numbers");
alert(numbers);

// 3. set a timer of 30 seconds
setTimeout( () => {
    // 4. ask (prompt) which number the user remember, one by one
    let userNumbers = []
    for (let i = 0; i < levelNumbers; i++) {
        switch (i) {
            case 0: 
                numbers.push(+prompt("Tell me the 1st number"));
                break;
            case 1: 
                numbers.push(+prompt("Tell me the 2nd number"));
                break;
            case 2: 
                numbers.push(+prompt("Tell me the 3rd number"));
                break;
            default: 
                numbers.push(+prompt(`Tell me the ${i + 1}th number`));
        }
    }

    // 5. comunicate the result of the test to the user
    for (let i = 0; i < levelNumbers; i++) {
        switch (i) {
            case 0: 
                alert("The 1st number is wrong");
                break;
            case 1: 
                alert("The 2nd number is wrong");
                break;
            case 2: 
                alert("The 3rd number is wrong");
                break;
            default: 
                alert(`The ${i + 1}th number is wrong`);
        }
    }

    if ( numbers === userNumbers ) {
        alert("Well done!!!");
        level++;
    } else {
        alert("Refresh and try again")
    }
}, 30000);