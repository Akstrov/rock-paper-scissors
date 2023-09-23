//rock paper scissor game
//get computer choice: generate random number 0-2 and map to rock, paper, scissors
//then return it
function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let number = Math.floor(Math.random() * 3);
  return choices[number];
}
//playRound function takes two arguments: computerSelection and playerSelection[should be case-insensitive]
//then return a string like "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let result;
  if (computerSelection === playerSelection) {
    result = "It's a tie! You both chose " + computerSelection;
  } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')
  ) {
    result = 'You win! ' + playerSelection + ' beats ' + computerSelection;
  } else {
    result = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
  }
  return result;
}
// game function that plays 5 rounds of the game and
//tracks wins/losses/ties and reports the results of each round and the winner at the end of the game
function game() {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      'Enter your choice: rock, paper or scissors'
    ).toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes('win')) {
      playerWins++;
    } else if (result.includes('lose')) {
      computerWins++;
    } else {
      ties++;
    }
  }
  if (playerWins > computerWins) {
    console.log(`You won the game with ${playerWins} wins!`);
  } else if (computerWins > playerWins) {
    console.log(
      `You lost the game. The computer won with ${computerWins} wins!`
    );
  } else {
    console.log('The game was a tie!');
  }
}
game();
