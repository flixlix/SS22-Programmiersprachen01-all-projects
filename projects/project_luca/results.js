const results = []; /* array with n objects, each object contains number of round, result of round, player 1 score, player 2 score  */
let currentRound = 0;
let themeUsed = "light";
/* default the theme used to light */
/* if user changes theme, variable value is changed */
/* check "light_dark_mode.js" file */

function addDetails() {
    let tableHeader = [
        "Round",
        "Your choice",
        "Computer's choice",
        "Winner",
        "Your points",
        "Computer's points",
    ];
    results.push(tableHeader);
    /* add to first row of table these columns */
}
/* create table header */

function addNewRound() {
    if (currentRound < roundsMax) /* if round index is not above maximum declared (ie: if there was no tie in the game) */ {
        currentRound++;
        /* increment current index of round */
    } else /* if there was a tie in the game */ {
        currentRound = roundsMax + " (TB*)";
        /* make current round the maximum number of rounds declared and add some info on it, so the user knows, this round was a tie breaker */
        /* can be multiple tie breaker rounds */
    }

    let winnerReadable;
    /* create winnerReadable variable */

    if (result === "p1") {
        winnerReadable = "You";
    } else if (result === "p2") {
        winnerReadable = "Computer"
    } else {
        winnerReadable = "-"
    }
    /* make winner column more readable */

    let thisRound = [
        currentRound,
        /* gets current round index (may be a tie breaker, check above, still inside this function) */
        p1Choice.charAt(0).toUpperCase() + p1Choice.slice(1),
        /* gets player 1 choice and makes first letter uppercase */
        p2Choice.charAt(0).toUpperCase() + p2Choice.slice(1),
        /* gets player 2 choice and makes first letter uppercase */
        winnerReadable,
        /* gets a human readable version of the winner of the current round */
        p1Score,
        /* gets the score of the player 1 at the point of the current round */
        p2Score,
        /* gets the score of the player 2 at the point of the current round */
    ];
    /* update all cells of the current round */

    results.push(thisRound);
    /* add current round to the end of the array */
}
/* updates table row values for this round */












/* ------------------------------------ Table Structure ----------------------------------- */
/*                           table is structured as follows:                                */
/* ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ */

/* ⇨ row1col1   |   row1col2   |   row1col3   |   row1col4   |   row1col5   |   row1col6 ⇦ */
/*   ↑↑↑↑↑↑↑↑↑↑↑↑ although this is part of the tbody, it is styled as a header ↑↑↑↑↑↑↑↑↑↑↑↑ */
/*   ______________________________________________________________________________________ */

/* ⇨ row2col1   |   row2col2   |   row2col3   |   row2col4   |   row2col5   |   row2col6 ⇦ */
/*   ______________________________________________________________________________________ */
/*                                                                                          */
/* ⇨ row3col1   |   row3col2   |   row3col3   |   row3col4   |   row3col5   |   row3col6 ⇦ */
/*   ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ these contain all info about each round ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */
/*   |||||||||||||||||||||||   in this case, there were two rounds   |||||||||||||||||||||| */

/* ⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧ */
/* ------------------------------------ Table Structure ----------------------------------- */