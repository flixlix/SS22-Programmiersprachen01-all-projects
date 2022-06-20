const choices = document.querySelectorAll('button');
const score = document.getElementById('score');
const result = document.getElementById('result');
//const endScore = document.getElementById('message')
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};
//endScore.style.display = "none";

// Play game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// Get computers choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//game logic 
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

    // add scores and show who won the round
function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    //add to player score
    scoreboard.player++;
    // show modal result
    result.innerHTML = `
      <h1 class="text-win">1 point for you!</h1>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
        <h6>click outside this box to close it</h6>
    `;
  } else if (winner === 'computer') {
    //add to computer score
    scoreboard.computer++;
    // show modal result
    result.innerHTML = `
      <h1 class="text-lose">1 point for Computer!</h1>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
        <h6>click outside this box to close it</h6>
    `;
  } else {
    result.innerHTML = `
        <h1>It's A Draw!</h1>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
        <h6>click outside this box to close it</h6>
    `;
  }
  // Show score
  score.innerHTML = `
    <h4>Player: ${scoreboard.player}</h4>
    <h4>Computer: ${scoreboard.computer}</h4>
    `;

  modal.style.display = 'block';
}

/* function endWinner(winner, scoreboard) {
    //end winner
    if (scoreboard.player===3) {
        endScore.style.display = "block";
        result.innerHTML = `
        <h1 class="text-win">You won the game!!</h1>
      `;      
    }
    else if (scoreboard.computer===3) {
        endScore.style.display = "block";
        result.innerHTML = `
        <h1 class="text-lose">You lost the game!!</h1>
      `;
    }
} */

  // restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <h4>Player: 0</h4>
    <h4>Computer: 0</h4>
  `;
  modal.style.display = 'none';
}

// clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);