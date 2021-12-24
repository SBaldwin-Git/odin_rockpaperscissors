let playerWins = 0;
let computerWins = 0;
let draws = 0;

function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    let result = rps[Math.floor(Math.random() * rps.length)];
    return result
}

function playRound(playerSelection, computerSelection) {
    let result = null;

    if (playerSelection == "rock") {

        if ((playerSelection == "rock") && (computerSelection == "paper")) {
            result = "Computer's paper beats Player's rock!"
            computerWins++;
        } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
            result = "Player's rock beats Computer's scissors!"
            playerWins++
        } else if ((playerSelection == "rock") && (computerSelection == "rock")) {
            result = "Draw! Both have chosen rock!"
            draws++
        }
    }

    if (playerSelection == "paper") {

        if ((playerSelection == "paper") && (computerSelection == "scissors")) {
            result = "Computer's scissors beats Player's paper!"
            computerWins++;
        } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
            result = "Player's paper beats Computer's rock!"
            playerWins++
        } else if ((playerSelection == "paper") && (computerSelection == "paper")) {
            result = "Draw! Both have chosen paper!"
            draws++
        }
    }

    if (playerSelection == "scissors") {

        if ((playerSelection == "scissors") && (computerSelection == "rock")) {
            result = "Computer's rock beats Player's scissors!"
            computerWins++;
        } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
            result = "Player's scissors beats Computer's paper!"
            playerWins++
        } else if ((playerSelection == "scissors") && (computerSelection == "scissors")) {
            result = "Draw! Both have chosen scissors!"
            draws++
        }
    }
    return result;
}

function game() {

    const playerSelection = prompt("Please pick Rock, Paper or Scissors.").toLowerCase();
    const computerSelection = computerPlay();

    console.log("The player chose " + playerSelection);
    console.log("The computer chose " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

console.log("Player Wins: " + playerWins);
console.log("Computer Wins " + computerWins);
console.log("Draws " + draws);

//game();