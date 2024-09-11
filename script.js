let ROCK = 1;
let PAPER = 2;
let SCISSORS = 3;

function generateRandomNumber() {
    const BOT = Math.floor(Math.random() * 3) + 1;

    return BOT;
}

function playGame() {
    let playerInput = prompt("Rock, paper, or scissors?");
    let UPPER_CASE = playerInput.toUpperCase();

    // console.log(UPPER_CASE);
}

// function startGame() {

// }

playGame();