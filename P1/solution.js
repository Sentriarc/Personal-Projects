let ROCK = 1;
let PAPER = 2;
let SCISSORS = 3;

const BOT = [ROCK, PAPER, SCISSORS];
const randomChoiceBOT = Math.floor(Math.random() * BOT.length + 1);

// Function to convert number to word
function getChoiceAsWord(choice) {
    if (choice === ROCK) return "rock";
    if (choice === PAPER) return "paper";
    if (choice === SCISSORS) return "scissors";
}

function playGame() {
    let playerInput = prompt("Rock, paper, or scissors?");
    let UPPER_CASE = playerInput.toUpperCase();

    let botChoice = getChoiceAsWord(randomChoiceBOT); // Convert the bot's choice to word

    if ((randomChoiceBOT === ROCK && UPPER_CASE === "ROCK") || (randomChoiceBOT === PAPER && UPPER_CASE === "PAPER") || (randomChoiceBOT === SCISSORS && UPPER_CASE === "SCISSORS")) {
        console.log(`The computer chose ${botChoice}!`);
        console.log("It's a tie!");
    } 
    else if ((randomChoiceBOT === ROCK && UPPER_CASE === "PAPER") || (randomChoiceBOT === PAPER && UPPER_CASE === "SCISSORS") || (randomChoiceBOT === SCISSORS && UPPER_CASE === "ROCK")) {
        console.log(`The computer chose ${botChoice}!`);
        console.log(`The player wins with ${playerInput.toLowerCase()}!`);
    } 
    else if ((randomChoiceBOT === ROCK && UPPER_CASE === "SCISSORS") || (randomChoiceBOT === PAPER && UPPER_CASE === "ROCK") || (randomChoiceBOT === SCISSORS && UPPER_CASE === "PAPER")) {
        console.log(`The computer chose ${botChoice}!`);
        console.log(`The computer wins with ${botChoice}!`);
    } 
    else {
        console.log("Something went wrong. Please try again!");
    }
}

playGame();
