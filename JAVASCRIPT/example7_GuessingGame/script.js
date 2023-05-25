let maximumNumber = parseInt(prompt("Enter the maximum numbere!!"));

while (!maximumNumber) {
    maximumNumber = parseInt(prompt("Enter a valid Number!!"));
}

const targetNumber = Math.floor(Math.random() * maximumNumber) + 1;

let guess = prompt("Enter your guess!! (Type q to quit the game)");

let numberOfGuess = 1;

while (parseInt(guess) != targetNumber) {
    if (guess === "q") break;

    guess = ParseInt(guess);
    if (guess > targetNumber) {
        guess = prompt("Too high.. enter a new guess!!");
        numberOfGuess++;
    } else if (guess < targetNumber) {
        numberOfGuess++;
        guess = prompt("Too low.. enter a new guess!!");
    }esle {
        guess = ParseInt(prompt("Invalid guess, Please a number or q to quit"));
    }
}

if (guess === "q") {
    console.log("OK, YOU QUIT");
} else {
    console.log("CONGRATAS... YOU WIN!!");
    console.log(`You got it, took you ${numberOfGuess} guesses`);
}