let ROCK = 1;
let PAPER = 2;
let SCISSORS = 3;

const BOT = [ROCK, PAPER, SCISSORS];
const randomChoiceBOT = Math.floor(Math.random() * BOT.length + 1);
// console.log(randomChoiceBOT)

function playGame() {
    let playerInput = prompt("Rock, paper, or scissors?");

    console.log(playerInput);
    // console.log(BOT);

    if (randomChoiceBOT === 1) {
        console.log("Computer chose rock.");
    }
    else if (randomChoiceBOT === 2) {
        console.log("Computer chose paper.");
    }
    else if (randomChoiceBOT === 3) {
        console.log("Computer chose scissors.");
    }
}



playGame();