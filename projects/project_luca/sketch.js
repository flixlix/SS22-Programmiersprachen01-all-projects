const fireworksRoot = document.getElementById("fireworks")
/* get element that fills whole page */
let fireworks = new Fireworks(fireworksRoot)

let announceWin = document.getElementById("win");
/* get element with winning text */
let announceLose = document.getElementById("lose");
/* get element with losing text */

let p1ScoreNumberDisplay = document.getElementById("p1-score-number");
/* get score points element of 1st player */
let p2ScoreNumberDisplay = document.getElementById("p2-score-number");

let p1ScoreTextDisplay = document.getElementById("p1-score-text");
/* get score points element of 1st player */
let p2ScoreTextDisplay = document.getElementById("p2-score-text");
/* get score points element of 2nd player */
let p1Score;
/* current points of player 1 */
let p2Score;
/* current points of player 2 */

let round;
/* current round */
let roundsMax = 5;
/* number of maximum possible rounds */

let secondsDelay = 5;
/* countdown timer in seconds */

const allActionButtons = Array.from(document.querySelectorAll(".action-button"))

let buttonRock = document.getElementById("rock");
/* assign variable "buttonRock" to element with the id "rock" */
let buttonPaper = document.getElementById("paper");
/* assign variable "buttonPaper" to element with the id "paper" */
let buttonScissors = document.getElementById("scissors");
/* assign variable "buttonScissors" to element with the id "scissors" */
let buttonSpock = document.getElementById("spock");
/* assign variable "buttonSpock" to element with the id "spock" */
let buttonLizard = document.getElementById("lizard");
/* assign variable "buttonLizard" to element with the id "lizard" */

let actionButtons = document.querySelectorAll('.action-button');
let actionButtonsContainer = document.getElementById('action');

let buttonRestart = document.getElementById("restart-btn")
/* assign variable "buttonRestart" to element with the id "restart-btn" */

let actionContainer = document.getElementById("action");
/* assign variable "actionContainer" to element with the id "action" */
let restartContainter = document.getElementById("restart");
/* assign variable "restartContainer" to element with the id "restart" */

let p1ChoiceDisplay = document.getElementById("p1_choice");
/* assign variable "p1ChoiceDisplay" to element with the id "p1_choice" */
let p2ChoiceDisplay = document.getElementById("p2_choice");
/* assign variable "p2ChoiceDisplay" to element with the id "p2_choice" */

let roundDisplay = document.getElementById("round");
/* assign variable "roundDisplay" to element with the id "round" */
let resultDisplay = document.getElementById("result");
/* assign variable "resultDisplay" to element with the id "result" */

let p1Choice;
/* create variable p1Choice */
let p2Choice;
/* create variable p2Choice */
let result;
/* create variable result with the winner of the current round */
let restartButton;

let header = document.getElementById("game-over-text");

let audioFireworks = new Audio('fireworks.mp3');

let computerSpeechBubbleText = document.getElementById('computer-speech-bubble-text');

let waitingForTimeout;
let waitingText = document.getElementById('waiting-text');

let speechBubble = document.getElementById('speech-bubble');

let choiceTitle = document.querySelector('.choice_titles');

let fireworksDisplay = document.getElementById('fireworks');

let infoImage = document.getElementById('info-image');

let tableButton = document.getElementById('table-button');

let finalResult;

setupGame();

/* call "setupGame" function  */

function setupGame() {
    actionButtonsContainer.style.visibility = "hidden";
    /* hide all action buttons upon start */
    tableButton.style.transform = "scale(0)";
    resetTimer();
    /* set time of timer to 0 and stop timer */
    p1ScoreNumberDisplay.style.opacity = 0;
    p2ScoreNumberDisplay.style.opacity = 0;
    p1ScoreTextDisplay.style.opacity = 0;
    p2ScoreTextDisplay.style.opacity = 0;
    /* hide Scoreboard when setting up the game */
    fireworksDisplay.style.zIndex = "-3";
    inputUsername.value = "";
    /* empty input field */
    inputRounds.value = "";
    /* empty input element */
    iconSelected = "";
    /* empty selected icon */
    inputP1Color.value = "#FFCA3A";
    /* reset color value for player 1 */
    inputP2Color.value = "#1982C4";
    /* reset color value for player 2 */
    popup.style.visibility = 'visible'
    /* show popup */
    popup.style.display = "flex"
    restartContainter.style.display = "none";
    /* hide container of restart button */
    restartContainter.style.visibility = "hidden";
    /* delete container of restart button from document flow */
    audioFireworks.pause()
    /* stop fireworks audio */
    actionContainer.style.display = "block";
    /* show container of action buttons */
    p1Score = 0;
    /* reset score of player 1 */
    p2Score = 0;
    /* reset score of player 2 */
    result = 0;
    /* reset value of result */
    updateScore1(result, p1Score);
    /* update display of score of player 1 */
    updateScore2(result, 0);
    /* update display of score of player 2 */

    round = 1;
    /* reset number of the current round */

    closePopupInfo();
    closePopupTable();

    resultDisplay.innerHTML = "To start the game, choose your first play.";
    /* show first text, inviting player to select an option instead of the result of the previous game */
    resultDisplay.classList.remove("bold");
    /* remove "bold" class from "resultDisplay" element */

    p1ChoiceDisplay.innerHTML = "&nbsp;" /* &nbsp; is a space-symbol */ ;
    /* remove all values of player 1's choice */
    p2ChoiceDisplay.innerHTML = "&nbsp;" /* &nbsp; is a space-symbol */ ;
    /* remove all values of player 2's choice */

    fireworks.stop();
    /* stop the firework animation */
    announceWin.style.visibility = "hidden";
    /* hide the winning text */
    announceLose.style.visibility = "hidden";
    /* hide the losing text */

    speechBubble.style.visibility = "hidden";

    p1NameDisplay.innerHTML = "";
    /* reset username value */
    selectIcon();
    /* reset selected icon */

    choiceTitle.style.opacity = 0;
    /* hide usernames */

    p1IconDefaultDisplay.style.display = 'block';
    p1IconCatDisplay.style.display = 'none';
    p1IconDogDisplay.style.display = 'none';
    p1IconHardHatDisplay.style.display = 'none';
    p1IconTieHatDisplay.style.display = "none";

    p1IconDisplay.style.fill = inputP1Color.value;
    p2IconDisplay.style.fill = inputP2Color.value;
    

    allActionButtons.forEach(actionButton => actionButton.style.backgroundColor = inputP1Color.value);
}

function startGame() /* reassigns values to default */ {
    p1ScoreNumberDisplay.style.opacity = 1;
    p2ScoreNumberDisplay.style.opacity = 1;
    p1ScoreTextDisplay.style.opacity = 1;
    p2ScoreTextDisplay.style.opacity = 1;
    /* show Scoreboard upon start of the game */
    actionButtonsContainer.style.visibility = "visible";
    /* show action buttons upon start of the game */
    popup.style.visibility = 'hidden'
    /* hide setup game popup */
    popup.style.display = "none"
    /* hide setup popup when starting game */
    header.innerHTML = "Game over";
    choiceTitle.style.opacity = 1;
    /* show usernames */
    updateRoundDisplay(round);
    /* update current round shown in page */
    p1IconDisplay.style.fill = p1ColorValue;
    p2IconDisplay.style.fill = p2ColorValue;

    allActionButtons.forEach(actionButton => actionButton.style.backgroundColor = p1ColorValue)
    /* run through each action button and assign to it the value of the color of the player 1 */
} /* generally this function restores all values to default and makes the user ready for another game */

function restartGame() {
    if (confirm("Are you sure you want to restart the game?") == true) {
        results.splice(0, results.length);
        /* clear results */
        currentRound = 0;
        /* reset round number for table of results */
        document.getElementById('table-container').innerHTML = '';
        return setupGame();
    } else {
        header.innerHTML = "You cancelled the confirmation dialog"
    }

}


function buttonPressed(button) /* run this function when one of the action buttons is clicked */ {
    if (!waitingForTimeout) {
        p1Choice = button.path[0].id;
        /* assign to the variable "p1Choice" to the id of the button that was pressed */
        p2Choice = getRandomChoice();
        /* assign to the variable "p2Choice" to a random option out of "rock", "paper", or "scissors" */
        result = getWinner(p1Choice, p2Choice);
        /* assign to the variable "result" to the output of the "getWinner" function */
        waitingForTimeout = true;
        waitingText.style.visibility = "visible";
        let timeoutDuration = Math.floor(Math.random() * (1000 - 500) + 500);
        /* random time of wait min duration: 1000ms; max duration: 2000ms */
        setTimeout(stopWaitingText, timeoutDuration);
    }
}

function stopWaitingText() {
    waitingText.style.visibility = "hidden";
    setTimeout(activateRound, 500);
}

function activateRound() {
    updateChoices(p1Choice, p2Choice);
    /* call function "updateChoices" to display the choice of each player */
    updateResult(result);
    /* call function "updateResult" to display the result of the current round */
    p1Score = updateScore1(result, p1Score);
    /* assign to the variable "p1Score" to the id of the button that was pressed */
    p2Score = updateScore2(result, p2Score);
    addNewRound();
    /* add last round to the table of results */
    round++;
    if (round > (roundsMax)) {
        comparePoints(p1Score, p2Score);
    } else {
        updateRoundDisplay(round);
    }
    waitingForTimeout = false;

}

function getRandomChoice() {
    const choices = ["rock", "paper", "scissors", "spock", "lizard"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function getWinner(p1, p2) {
    if (p1 === p2) {
        return "tie";
    } else if (p1 == "rock") {
        if (p2 == "paper") {
            return "p2";
        } else if (p2 == "scissors") {
            return "p1";
        } else if (p2 == "spock") {
            return "p2";
        } else if (p2 == "lizard") {
            return "p1";
        }
    } else if (p1 == "paper") {
        if (p2 == "rock") {
            return "p1";
        } else if (p2 == "scissors") {
            return "p2";
        } else if (p2 == "spock") {
            return "p1";
        } else if (p2 == "lizard") {
            return "p2";
        }
    } else if (p1 == "scissors") {
        if (p2 == "rock") {
            return "p2";
        } else if (p2 == "paper") {
            return "p1";
        } else if (p2 == "spock") {
            return "p2";
        } else if (p2 == "lizard") {
            return "p1";
        }
    } else if (p1 == "spock") {
        if (p2 == "rock") {
            return "p1";
        } else if (p2 == "paper") {
            return "p2";
        } else if (p2 == "scissors") {
            return "p1";
        } else if (p2 == "lizard") {
            return "p2";
        }
    } else if (p1 == "lizard") {
        if (p2 == "rock") {
            return "p2";
        } else if (p2 == "paper") {
            return "p1";
        } else if (p2 == "scissors") {
            return "p2";
        } else if (p2 == "spock") {
            return "p1";
        }
    }
}

function updateChoices(p1Choice, p2Choice) {
    let animation = [{
            transform: ["scale(1)", "scale(1.3)"],
        },
        {
            duration: 300,
            /* time in which each animation takes place */
            easing: "ease-in-out",
            /* esaing of animation */
            direction: "alternate",
            /* go in both directions, like a pendulum */
            iterations: 6,
            /* 3 repetitions */
        }
    ]
    p1ChoiceDisplay.animate(animation[0], animation[1]);
    p2ChoiceDisplay.animate(animation[0], animation[1]);
    let p1Icon;
    let p2Icon;
    p1Icon = setIconDisplay(p1Choice, p1Icon);
    p2Icon = setIconDisplay(p2Choice, p2Icon);
    p1ChoiceDisplay.innerHTML = p1Icon;
    p2ChoiceDisplay.innerHTML = p2Icon;
}

function setIconDisplay(choice, icon) {
    switch (choice) {
        case "rock":
            icon = "🪨";
            break;
        case "paper":
            icon = "📰";
            break;
        case "scissors":
            icon = "✂️";
            break;
        case "spock":
            icon = "🖖🏽";
            break;
        case "lizard":
            icon = "🦎";
            break;
        default:
            return;
    }
    return icon;
}

function updateResult(result) {
    let resultReadable;
    let textColorFlash;
    if (result === "tie") {
        textColorFlash = "rgba(var(--primary-text-color),0.4)";
        /* flash background color of gray */
        resultReadable = "This round is a tie";
    } else if (result === "p1") {
        textColorFlash = p1ColorValue;
        /* flash background color of the result the same color as player 1 */
        resultReadable = "You won this round!";
    } else if (result === "p2") {
        textColorFlash = p2ColorValue;
        /* flash background color of the result the same color as player 1 */
        resultReadable = "You lost this round.";
    }
    resultDisplay.animate({
        /* transform: ["scaleX(1)", "scaleX(1.3)"], */
        backgroundColor: [
            "rgb(var(--background-color))",
            textColorFlash,
            /* flash background color between the same as the background (invisible) and the color defined in the lines above */
        ]
    }, {
        duration: 300,
        /* time in which each animation takes place */
        easing: "ease-in-out",
        /* esaing of animation */
        direction: "alternate",
        /* go in both directions, like a pendulum */
        iterations: 6,
        /* 3 repetitions */
    });
    /* animate resultDisplay 3 time larger and smaller */
    return resultDisplay.innerHTML = resultReadable;

}

function updateScore1(result, p1Score) {
    let pointName;
    if (result === "p1") {
        p1Score++;
    }
    if (p1Score === 1) {
        pointName = "point";
    } else {
        pointName = "points";
    }
    p1ScoreNumberDisplay.innerHTML = p1Score;
    p1ScoreTextDisplay.innerHTML = pointName;

    return p1Score;
}

function updateScore2(result, p2Score) {
    let pointName;
    if (result === "p2") {
        p2Score++;
    }
    if (p2Score === 1) {
        pointName = "point";
    } else {
        pointName = "points";
    }
    p2ScoreNumberDisplay.innerHTML = p2Score;
    p2ScoreTextDisplay.innerHTML = pointName;
    return p2Score;
}

function comparePoints(p1Score, p2Score) {
    if (p1Score > p2Score) {
        /* resultDisplay.innerHTML = "You won the game!"; */
        finalResult = "p1";
        setEndText("win");
        startFireworks();
        audioFireworks.play();
        audioFireworks.loop = true;
        announceWin.style.visibility = "visible";
        speechBubble.style.visibility = "visible";

    } else if (p1Score < p2Score) {
        /* resultDisplay.innerHTML = "You lost the game. Try again"; */
        finalResult = "p2";
        setEndText("lose");
        announceLose.style.visibility = "visible";
        speechBubble.style.visibility = "visible";
    } else {
        setEndText("tie");
        resultDisplay.innerHTML = "It's a tie. Let's do a sudden death!";
        speechBubble.style.visibility = "visible";
        return;
    }
    stopTimer();
    /* stop timer when there is a result */
    updateEndValues();
    addFinalResult();

    tableButton.style.transform = "scale(1)";
    actionContainer.style.display = "none";
    /* hide action "rock, paper scissor" buttons */
    restartContainter.style.display = "block";
    /* show restart button */
    restartContainter.style.visibility = "visible";
}

function updateRoundDisplay(round) {
    roundDisplay.innerHTML = "Round " + round + "/" + roundsMax;
}


function startFireworks() {
    fireworksDisplay.style.zIndex = "100";
    /* assign z-index of 100 to make fireworks infront of the rest */
    fireworks.start()
    fireworks.setOptions({
        acceleration: 0.9999,
        opacity: 1,
        friction: 0.97,
        trace: 1,
        mouse: {
            click: true,
            move: false,
            max: 5
        }
    })
}

function setEndText(endResult) {
    if (endResult === "lose") /* player 1 loses */ {
        speechBubble.innerHTML = getRandomItem(text.lose)
        /* get a random sentence from the lose property */
    } else if (endResult === "win") /* player 1 wins */ {
        speechBubble.innerHTML = getRandomItem(text.win)
        /* get a random sentence from the win property */
    } else /* in case of a tie */ {
        speechBubble.innerHTML = getRandomItem(text.tie)
        /* get a random sentence from the tie property */
    }
}

function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
    /* returns a random item from an array with multiple items in it */
}

buttonRock.addEventListener('click', buttonPressed);
/* creates event listener for "buttonScissors" component */
/* when the button is clicked, calls "buttonPressed" function */

buttonPaper.addEventListener('click', buttonPressed);
/* creates event listener for "buttonPaper" component */
/* when the button is clicked, calls "buttonPressed" function */

buttonScissors.addEventListener('click', buttonPressed);
/* creates event listener for "buttonScissors" component */
/* when the button is clicked, calls "buttonPressed" function */

buttonSpock.addEventListener('click', buttonPressed);
/* creates event listener for "buttonScissors" component */
/* when the button is clicked, calls "buttonPressed" function */

buttonLizard.addEventListener('click', buttonPressed);
/* creates event listener for "buttonScissors" component */
/* when the button is clicked, calls "buttonPressed" function */

buttonRestart.addEventListener('click', restartGame);
/* creates event listener for "buttonRestart" component */
/* when the button is clicked, calls "startGame" function */