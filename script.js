//Score Variables
let playerWins = 0;
let computerWins = 0;
let draws = 0;

//Current Score and Round Result DOM
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');;
let roundResult = document.querySelector('#roundResult');;
let gameResult = document.querySelector('#gameResult');

//Add Event Listeners
document.querySelector('#rockBtn').addEventListener("click", function() {
    game("rock");
});
document.querySelector('#paperBtn').addEventListener("click", function() {
    game("paper");
});
document.querySelector('#scissorsBtn').addEventListener("click", function() {
    game("scissors");
});

//Prompts player to select and calls playRound Function
function game(playerPick) {

    const playerSelection = playerPick.toLowerCase();
    const computerSelection = computerPlay();

    console.log("The player chose " + playerSelection);
    console.log("The computer chose " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

//Returns rock, paper or scissors for the computer
function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    let result = rps[Math.floor(Math.random() * rps.length)];
    return result
}

//Compares player and computer selection and returns result as string
function playRound(playerSelection, computerSelection) {
    let result = null;

    //Rock
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

    //Paper
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

    //Scissors
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

    if(playerWins == 5){
        gameResult.textContent = "PLAYER WINS";
        document.querySelector('#rockBtn').disabled = true;
        document.querySelector('#paperBtn').disabled = true;
        document.querySelector('#scissorsBtn').disabled = true;
    } 
    
    else if (computerWins == 5){
        gameResult.textContent = "COMPUTER WINS";
        document.querySelector('#rockBtn').disabled = true;
        document.querySelector('#paperBtn').disabled = true;
        document.querySelector('#scissorsBtn').disabled = true;
    }
    //Updates DOM to match current results
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    roundResult.textContent = result;

    return result;
}

//Prints results to console
console.log("Player Wins: " + playerWins);
console.log("Computer Wins " + computerWins);
console.log("Draws " + draws);