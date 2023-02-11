// function to get computer choice

const rockPaperScissors = ["rock","paper","scissors"];

function getComputerChoice() {
  let random = Math.floor((Math.random() * rockPaperScissors.length));
  return rockPaperScissors[random]
}

// console.log(getComputerChoice());


// Get choice from user

let userInput = (prompt("Rock Paper or Scissors?", "")).toLowerCase();
// console.log(userInput);

// function to take both inputs, compare, and declare winner
const playerSelection = userInput;
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Computer also chose " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ". It's a draw!"
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "Computer chose Scissors. You win!"
    } else {
      return "Computer chose Paper. You lose!"
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "Computer chose Rock. You win!"
    } else {
      return "Computer chose Scissors. You lose!"
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "Computer chose Paper. You win!"
    } else {
      return "Computer chose Rock. You lose!"
    }
  } else {
    return "Please enter Rock, Paper, or Scissors"
  }
}

alert(playRound(playerSelection, computerSelection));