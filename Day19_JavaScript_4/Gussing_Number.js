const max = prompt("Enter the max Number");

const random = Math.floor(Math.random()* max ) + 1 ;

let guess=prompt("Guess the Number");

while(true) {
    if (guess == "quit") {
        console.log("You quit the game. Failed !!!...");
        break;
    }

    if (guess == random) {
        console.log("You guess the right Congrats ! random number was" , random);
        break;
    } else if(guess < random) {
       guess = prompt("Hint : You guess was too small. Please try again !!!..");
    } else {
        guess = prompt("Hint : Your guess was too large. Please try again !!!..");
    }
}