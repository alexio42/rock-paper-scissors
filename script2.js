const rockPaperScissors = ["rock","paper","scissors"];

function getComputerChoice() {
  let random = Math.floor((Math.random() * rockPaperScissors.length));
  return rockPaperScissors[random]
}

var computerPoints = 0;
var userPoints = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let userInput = (prompt("Rock Paper or Scissors?", "")).toLowerCase();
    const playerSelection = userInput;
    const computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
    console.log(userPoints);
    console.log(computerPoints);
  }

  if (userPoints > computerPoints) {
    alert("You win! " + userPoints + "-" + computerPoints)
  } else if (computerPoints > userPoints) {
    alert("Computer wins! " + computerPoints + "-" + userPoints)
  } else {alert(userPoints + "-" + computerPoints + " A draw!")}
}

game();


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Computer also chose " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ". It's a draw!"
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      userPoints++
      return "Computer chose Scissors. You win!"
    } else {
      computerPoints++
      return "Computer chose Paper. You lose!"
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      userPoints++
      return "Computer chose Rock. You win!"
    } else {
      computerPoints++
      return "Computer chose Scissors. You lose!"
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      userPoints++
      return "Computer chose Paper. You win!"
    } else {
      computerPoints++
      return "Computer chose Rock. You lose!"
    }
  } else {
    return "Please enter Rock, Paper, or Scissors"         
  }
}

