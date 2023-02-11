// function to get computer choice

const rockPaperScissors = ["rock","paper","scissors"];

function getComputerChoice() {
  let random = Math.floor((Math.random() * rockPaperScissors.length));
  return rockPaperScissors[random]
}

console.log(getComputerChoice());


// Get choice from user

let userInput = (prompt("Rock Paper or Scissors?", "")).toLowerCase();
console.log(userInput);

// function to take both inputs, compare, and declare winner
