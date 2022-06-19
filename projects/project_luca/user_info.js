let inputUsername = document.getElementById('input-p1-name');
/* input element for username */

let inputRounds = document.getElementById('input-rounds');
/* input element for maximum number of rounds */

let inputP1Color = document.getElementById('input-p1-color');
/* input element for color of player 1 */
let inputP2Color = document.getElementById('input-p2-color');
/* input element for color of player 2 */

let iconPickHardHat = document.getElementById('account-hard-hat');
let iconPickTieHat = document.getElementById('account-tie-hat');
let iconPickCat = document.getElementById('cat');
let iconPickDog = document.getElementById('dog');
/* elements of icons that can be selected */
iconPickHardHat.addEventListener('click', selectIcon);
iconPickTieHat.addEventListener('click', selectIcon);
iconPickCat.addEventListener('click', selectIcon);
iconPickDog.addEventListener('click', selectIcon);
/* add event listeners for all selectable icons */
/* when an icon is clicked, call "selectIcon()" function */

let p1IconDefaultDisplay = document.getElementById('p1-icon-default');
/* path element of default icon, which is just a person */
let p1IconDogDisplay = document.getElementById('p1-icon-dog');
/* path element of dog icon positioned inside the game */
let p1IconCatDisplay = document.getElementById('p1-icon-cat');
/* path element of cat icon positioned inside the game */
let p1IconTieHatDisplay = document.getElementById('p1-icon-tie-hat');
/* path element of tie hat icon positioned inside the game */
let p1IconHardHatDisplay = document.getElementById('p1-icon-hard-hat');
/* path element of hard hat icon positioned inside the game */

let iconSelected;
/* element of currently selected icon */

let submitButton = document.getElementById('submit-button');
/* element of submit button */
submitButton.addEventListener('click', submitInfo);
/* add event listener for submit button */
/* when clicked, call "submitInfo()" function */

let p1NameDisplay = document.getElementById('p1-name');
/* element of username displayed inside the game */

let popup = document.getElementById('popup');
/* element of popup container */

let roundsValue;
/* value of input element */

let p1ColorValue;
/* value of input color element of player 1 */
let p2ColorValue;
/* value of input color element of player 2 */

let p1IconDisplay = document.getElementById('photo-p1');
/* svg element of icon of player 1 */
let p2IconDisplay = document.getElementById('photo-p2');
/* svg element of icon of player 2 */

let usernameValue;
/* create variable with false input element */


function submitInfo() /* check inputs and if all is good, submit all user info */ {
    usernameValue = inputUsername.value;
    /* sync variable with actual value of username input field */
    usernameValue = usernameValue.charAt(0).toUpperCase() + usernameValue.slice(1);
    /* capitalize first letter of username */
    roundsValue = inputRounds.value;
    /* sync variable with actual value of input field */
    roundsMax = roundsValue;
    /* sync actual number of rounds to be played with the value entered */
    p1ColorValue = inputP1Color.value;
    /* sync variable with value entered in input element for player 1 */
    p2ColorValue = inputP2Color.value;
    /* sync variable with value entered in input element for player 2 */

    let allCheckResults = {
        username: checkUsername(),
        rounds: checkRounds(),
        colors: checkColors(),
        icons: checkIcons(),
    }
    /* create object containing all results of all checks */
    for (const property in allCheckResults) /* run through allCheckResults object */ {
        if (allCheckResults[property] === false) /* if one of the object properties has a value of false */ {
            return "user input malformed";
            /* stop function and return string with "user input malformed" */
        }
    }
    /* if at least one of the checks return a false value, stop function */


    hideAllIcons();
    /* hide all icon paths in game by default */

    if (iconSelected.id === "account-hard-hat") {
        p1IconHardHatDisplay.style.display = 'block';
        /* show icon */
    } else if (iconSelected.id === "account-tie-hat") {
        p1IconTieHatDisplay.style.display = "block";
        /* show icon */
    } else if (iconSelected.id === "cat") {
        p1IconCatDisplay.style.display = "block";
        /* show icon */
    } else if (iconSelected.id === "dog") {
        p1IconDogDisplay.style.display = "block";
        /* show icon */
    }
    p1NameDisplay.innerHTML = usernameValue;
    /* write username inside game */
    addDetails();
    startTimer();
    /* start the timer when info is submitted */
    startGame();
    /* if all checks have passed, start the game and close the popup (inside the "startGame()" function) */
}

function checkUsername() {
    if (!usernameValue) /* if no username is entered */ {
        alert("Please enter a username");
        /* alert user to enter a username */
        return false;
        /* return stop function with false */
    } else if (typeof (usernameValue) != "string" || usernameValue.match(/[^a-zA-Z ]+/)) /* if username is not a string or contains special characters */ {
        alert("Please change your username. Special characters are not allowed.");
        /* alert user that special characters are not allowed */
        return false;
        /* return and stop function with false */
    } else if (usernameValue.length > 10) /* if string has more than 15 char */ {
        alert("You've inserted a username with " + usernameValue.length + " characters. The maximum number of characters allowed is 10. Please make your username smaller.")
        /* alert user that username is too long */
        return false;
        /* return and stop function with false */
    }
    return true;
    /* return true, if no errors were detected */
}

function checkRounds() {
    if (!roundsValue) /* if no rounds are specified */ {
        alert("Please enter the number of rounds you want to play");
        /* alert user to enter number of rounds */
        return false;
        /* return and stop function with false */
    } else if (roundsValue < 1) /* if number of rounds entered is below 1 */ {
        alert("You entered " + roundsValue + " rounds. The minimum number is 1.");
        /* alert user to enter a larger number of rounds */
        return false;
        /* return and stop function with false */
    } else if (roundsValue > 40) {
        alert("You entered " + roundsValue + " rounds. The maximum number is 40.");
        /* alert user to enter a smaller number of rounds */
        return false;
        /* return and stop function with false */
    } else if (!(roundsValue % 1 === 0)) /* if enetered number is not a whole number (not divisible by 1) */ {
        alert("Please enter a whole number, without decimals.");
        /* alert user to enter whole number */
        return false;
        /* return and stop function with false */
    }
    return true;
    /* return true, if no errors were detected */
}

function checkColors() {
    let contrasts = checkContrasts();
    /* check all contrasts and return an array */
    for (let i = 0; i < contrasts.length; i++) /* run through array */ {
        if (contrasts[i] < 1.198798858751585) /* check if contrast is too low */ {
            if (i <= 1) /* if the issue is coming from the color of player 1 */ {
                alert("Please change your color. It doesn't have enough contrast relative to the background")
                /* alert that the color of the player 1 doesn't have enough contrast */
            } else if (i >= 2 && i < 4) /* if the issue is coming from the color of player 2 */ {
                alert("Please change the computer's color. It doesn't have enough contrast relative to the background")
                /* alert that the color of the player 2 doesn't have enough contrast */
            } else if (i === 4) {
                alert("Please change one of the colors. They are too similar.")
                /* alert user that the two colors are too similar */
            }
            return false;
            /* if one of the constellations doesn't have enough contrast, stop function */
        }
    }
    /* run trough both colors and check their contrast them to the light and dark mode background colors */
    return true;
}

function checkIcons() {
    if (!iconSelected) /* if no icon was selected */ {
        alert('Please select an icon');
        /* alert user to select an icon */
        return false;
        /* return and stop function with false */
    }
    return true;
    /* return true, if no errors were detected */
}

function hideAllIcons() {
    p1IconDefaultDisplay.style.display = 'none';
    p1IconCatDisplay.style.display = 'none';
    p1IconDogDisplay.style.display = 'none';
    p1IconHardHatDisplay.style.display = 'none';
    p1IconTieHatDisplay.style.display = "none";
}
/* hide all icons in the game by default */

function selectIcon(button) /* run function when icon was selected. Accept button element parameter */ {
    if (button) /* if there was a button clicked */ {
        if (button.path[1].classList.contains('active')) /* if icon was already selected */ {
            iconSelected.classList.remove('active'); /* show icon as unselected */
            iconSelected = undefined; /* unselect icon */
            return; /* stop function and don't return anything */
        }
        /* unselect icon, if it was already selected and was clicked again */
    }

    iconPickHardHat.classList.remove('active');
    iconPickTieHat.classList.remove('active');
    iconPickCat.classList.remove('active');
    iconPickDog.classList.remove('active');
    /* show all icons as unselected */

    /* make all icons inactive on every new icon click */
    if (button) /* if there was a button selected */ {
        iconSelected = document.getElementById(button.path[1].id);
        /* assign to the variabel "iconSelected" the id of the button that was clicked */
        iconSelected.classList.add("active");
        /* add class "active" to button that was clicked */
        return iconSelected;
        /* return the icon that was selected */
    }
    /* select an icon */
}

function hexToRGB(h) /* convert hex color to array of r,g and b values */ {
    let r = 0,
        g = 0,
        b = 0;

    // 3 digits
    if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
    } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }

    return [+r, +g, +b];
}

function luminance(r, g, b) /* get luminance of given color */ {
    const a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ?
            v / 12.92 :
            Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}



function contrast(hex1, hex2) /* calculate contrast between two hex colors */ {
    const rgb1 = hexToRGB(hex1);
    const rgb2 = hexToRGB(hex2);
    const lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
    const lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) /
        (darkest + 0.05);
}

function checkContrasts() /* check contrast of all four possible contelations (eg: dark mode, icon from player 1; light mode, icon from player 2 etc...) */ {
    const lightBgColor = '#fff';
    /* create constant of light background color */
    const darkBgColor = '#1e1e1e';
    /* create constant of dark background color */
    const lightP1Contr = contrast(lightBgColor, p1ColorValue);
    /* contrast between background color in light mode and player 1 color */
    const darkP1Contr = contrast(darkBgColor, p1ColorValue);
    /* contrast between background color in dark mode and player 1 color */
    const lightP2Contr = contrast(lightBgColor, p2ColorValue);
    /* contrast between background color in light mode and player 2 color */
    const darkP2Contr = contrast(darkBgColor, p2ColorValue);
    /* contrast between background color in light mode and player 2 color */
    const P1P2Contr = contrast(p1ColorValue, p2ColorValue);
    /* contrast between background color in dark mode and player 2 color */
    return [lightP1Contr, darkP1Contr, lightP2Contr, darkP2Contr, P1P2Contr];
    /* return array of contrast values with length of 4 */
}