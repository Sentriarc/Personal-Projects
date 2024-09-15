let ROCK = 1;
let PAPER = 2;
let SCISSORS = 3;
// const BOT = Math.floor(Math.random() * 3) + 1;
const BOT = [ROCK, PAPER, SCISSORS];
const randomChoiceBOT = Math.floor(Math.random() * BOT.length + 1);
// console.log(randomChoiceBOT)

if (randomChoiceBOT === 1) {
    console.log("Computer chose rock.");
}
else if (randomChoiceBOT === 2) {
    console.log("Computer chose paper.");
}
else if (randomChoiceBOT === 3) {
    console.log("Computer chose scissors.");
}

function playGame() {
    let playerInput = prompt("Rock, paper, or scissors?");
    let LOWER_CASE = playerInput.toLowerCase();
    let choice;

    console.log(LOWER_CASE);
    // console.log(BOT);

    if (randomChoiceBOT === 1 && playerInput === 1) {
        console.log("It's a tie!");
    }
}

// function startGame() {
//     playGame();

    

// }

// startGame();

playGame();