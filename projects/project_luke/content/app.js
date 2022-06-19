const computerChoiceDisplay = document.getElementById('computer-choice') // 
const userChoiceDisplay = document.getElementById('user-choice') //
const resultDisplay = document.getElementById('result') //
const possibleChoices = document.querySelectorAll('button') //uses all the 'buttons'
let userChoice
let computerChoice
let result

// possibleChoices looks for clicks and gets the target id and saves it as user choice.
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult() 
}))

//generates random number
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = 'fire'}
  if (randomNumber === 2) {
    computerChoice = 'grass'}
  if (randomNumber === 3) {
    computerChoice = 'water'}

  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'drawn '
  }
  if (computerChoice === 'fire' && userChoice === "water") {
    result = 'won '
  }
  if (computerChoice === 'fire' && userChoice === "grass") {
    result = 'lost '
  }
  if (computerChoice === 'water' && userChoice === "grass") {
    result = 'won '
  }
  if (computerChoice === 'water' && userChoice === "fire") {
    result = 'lost '
  }
  if (computerChoice === 'grass' && userChoice === "fire") {
    result = 'won '
  }
  if (computerChoice === 'grass' && userChoice === "water") {
    result = 'lost '
  }
  resultDisplay.innerHTML = result
}
