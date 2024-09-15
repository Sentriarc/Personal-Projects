let ROCK = 1;
let PAPER = 2;
let SCISSORS = 3;

const BOT = [ROCK, PAPER, SCISSORS];
const randomChoiceBOT = Math.floor(Math.random() * BOT.length + 1);
// console.log(randomChoiceBOT)

function playGame() {
    let playerInput = prompt("Rock, paper, or scissors?");
    let UPPER_CASE = playerInput.toUpperCase();

    console.log(playerInput);
    // console.log(BOT);

    if ((randomChoiceBOT === ROCK && UPPER_CASE === "ROCK") || (randomChoiceBOT === PAPER && UPPER_CASE === "PAPER") || (randomChoiceBOT === SCISSORS && UPPER_CASE === "SCISSORS")) {
        // console.log(`The computer chose ${randomChoiceBOT}.`); // currently prints the number rather than the actual value :(
        console.log("It's a tie!");
    }
    else if ((randomChoiceBOT === ROCK && UPPER_CASE === "PAPER") || (randomChoiceBOT === PAPER && UPPER_CASE === "SCISSORS") || (randomChoiceBOT === SCISSORS && UPPER_CASE === "ROCK")) {
        console.log(`The computer chose ${randomChoiceBOT}.`); // currently prints the number rather than the actual value :(
        console.log("The player wins!");
    }
    else if ((randomChoiceBOT === ROCK && UPPER_CASE === "SCISSORS") || (randomChoiceBOT === PAPER && UPPER_CASE === "ROCK") || (randomChoiceBOT === SCISSORS && UPPER_CASE === "ROCK")) {
        console.log(`The computer chose ${randomChoiceBOT}.`); // currently prints the number rather than the actual value :(
        console.log("The computer wins!");
    }
    else {
        console.log("Something went wrong. Please try again!");
    }
}



playGame();