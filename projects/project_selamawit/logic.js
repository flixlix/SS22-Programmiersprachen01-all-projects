var scoreArray = [];
let p = 0;
let c = 0;
//com
const com_hand1 = document.getElementById("c_hand1");
const com_hand2 = document.getElementById("c_hand2");
const com_hand3 = document.getElementById("c_hand3");
// let com_index1 = document.getElementById("c_index1");
// let com_index2 = document.getElementById("c_index2");
// let com_index3 = document.getElementById("c_index3"); 

//player
const player_hand1 = document.getElementById("p_hand1");
const player_hand2 = document.getElementById("p_hand2");
const player_hand3 = document.getElementById("p_hand3");
// let player_index1 = document.getElementById("p_index1");
// let player_index2 = document.getElementById("p_index2");
// let player_index3 = document.getElementById("p_index3");

let fehler_unten = document.getElementById("fehler");

//game
const player_state = document.getElementById("p_state");
const com_state = document.getElementById("c_state");
const box_state = document.getElementById("text_state"); //rechts oben

//oben rechts
const resetButton = document.getElementById("back_button");
const state = document.getElementById("rounds"); //rechts oben

//function handClacRandom und arrayChoices need access
var arrayC = [0, 0, 0];
var arrayP = [0, 0, 0];

let comConverted = [];
let playerConverted = [];
let rundenAnzahl = 10; //main_form

var comChoice = '';

//Runden Einstellen
// let rundennn = document.forms[0];
// let rundenAnzahl = "";
// for(let i = 0; i < rundennn.length; i++){
//     console.log(rundennn[i]);
//     if(rundennn[i].checked){
//         rundenAnzahl = rundennn[i].value;
//     }
// }

//For the Pictures
images_cHand = ["<img src='images/rock.png' id='img1'  style='transform: scaleX(-1);' >", "<img src='images/paper.png' id='img1' style='transform: scaleX(-1);'>", "<img src='images/scissor.png' id='img1' style='transform: scaleX(-1);'>"];
images_pHand = ["<img src='images/rock.png' id='img2'>", "<img src='images/paper.png' id='img2'>", "<img src='images/scissor.png' id='img3'>"];

function main_form() {

    gamehidden.style.display = "none";

    document.getElementById("startButton").addEventListener('click', function () {

        if (document.getElementById("usernameValue").value == "") {
            document.getElementById("usernameValue").value = "You";
            //Setting the Username in the Game
            document.getElementById("username").innerHTML = document.getElementById("usernameValue").value;
            // document.getElementById("usernameValue").style.color = "red";
        } else {
            document.getElementById("username").innerHTML = document.getElementById("usernameValue").value;
        }

        //FORM HIDES AND GAME STARTS
        setTimeout(function () {
            formhidden.style.display = "none";
            gamehidden.style.display = "block";
        }, 400)
    })
    main();
}

function setDeck() {
    const num123 = 0;
    const array = [0, 0, 0];
    for (i = 0; i < rundenAnzahl; i++) {
        const num123 = Math.floor(Math.random() * 3);
        array[num123] += 1;
    }
    return array
}

function setIndexBoth() {
    c_index1.innerHTML = arrayC[0];
    c_index2.innerHTML = arrayC[1];
    c_index3.innerHTML = arrayC[2];

    p_index1.innerHTML = arrayP[0];
    p_index2.innerHTML = arrayP[1];
    p_index3.innerHTML = arrayP[2];
}

function convertInChoices(array) {
    const rps = ['r', 'p', 's'];
    comConverted = []; //need to be empty again
    for (let i = 0; i < 3; i++) {
        for (let k = array[i]; k > 0; k--) {
            comConverted.push(rps[i]);
        }
    }
}

function randomChoosing() {
    const num123 = Math.floor(Math.random() * comConverted.length);

    return num123;
}

function convertChoicesToIndexArray(array) { //comConverted wird übergeben
    arrayC = [0, 0, 0]
    for (let i = 0; i < comConverted.length; i++) {
        if (array[i] == 'r') {
            arrayC[0]++;
        } else if (array[i] == 'p') {
            arrayC[1]++;
        } else if (array[i] == 's') {
            arrayC[2]++;
        }
    }
    // return arrayC;
}

function win() {
    // console.log('win');
    scoreArray.push('win');
}

function lose(user, computer) {
    // console.log('lose');
    scoreArray.push('lose');
}

function draw(user, computer) {
    // console.log('draw');
    scoreArray.push('draw');
}

function changeImageOfCom(letter) {
    if (letter == "r") {
        com_state.innerHTML = images_cHand[0];
    }
    if (letter == "p") {
        com_state.innerHTML = images_cHand[1];
    }
    if (letter == "s") {
        com_state.innerHTML = images_cHand[2];
    }
}

function scoreColor() {
    let scoreArray_scorebox = [
        document.getElementById('b1'),
        document.getElementById('b2'),
        document.getElementById('b3'),
        document.getElementById('b4'),
        document.getElementById('b5'),
        document.getElementById('b6'),
        document.getElementById('b7'),
        document.getElementById('b8'),
        document.getElementById('b9'),
        document.getElementById('b10'),
    ]

    for (let i = 0; i < scoreArray.length; i++) {
        switch (scoreArray[i]) {
            case 'win':
                scoreArray_scorebox[i].style.backgroundColor = "#a8a0f3";
                break;
            case 'lose':
                scoreArray_scorebox[i].style.backgroundColor = "#FAFAFA";
                break;
            case 'draw':
                scoreArray_scorebox[i].style.background = "linear-gradient(-70deg, #ffffff 50%, #a8a0f3 50%)";
                break;
        }
    }
}

function setGreyTone() {
    //turning grey if index=0
    for (let i = 0; i < arrayC.length; i++) {
        arrayIndex = [p_index1, p_index2, p_index3];
        array2Index = [c_index1, c_index2, c_index3];
        array = [player_hand1, player_hand2, player_hand3];
        array2 = [com_hand1, com_hand2, com_hand3];
        if (arrayP[i] == 0) {
            array[i].style.filter = "grayscale(1)";
            array[i].style.opacity = "0.8";
            arrayIndex[i].innerHTML = "";
        }
        if (arrayC[i] == 0) {
            // console.log('Com',arrayC[i]);
            array2[i].style.filter = "grayscale(1)";
            array2[i].style.opacity = "0.8";
            array2Index[i].innerHTML = "";
        }
    }
}

function game(userChoice) {
    //text vorne entfernen
    document.getElementById("text_state").innerHTML = "";

    //random arrayC[1,0,2]-> ['r','s','s'] umgewandelt
    convertInChoices(arrayC);
    // console.log(comConverted);
    //choice of computer=comChoice 
    comChoice = comConverted.splice(randomChoosing(), 1);

    changeImageOfCom(comChoice);
    //comConverted Array ohne comChoice

    //Array ohne comChoice in IndexArray für Ausgabe
    convertChoicesToIndexArray(comConverted);

    //index update
    setIndexBoth();

    //switch-cases
    switch (userChoice + comChoice) {
        case "rs":
        case "pr":
        case "sp":
            // rounds.style.color = 'red';
            win();
            scoreColor();
            break;
        case "sr":
        case "rp":
        case "ps":
            lose();
            scoreColor();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            scoreColor();
            break;
    }
    console.log(scoreArray); //scoreBoard later needed
}

function isTheGameOver() {
    if (scoreArray.length == rundenAnzahl) {
        for (let i = 0; i < scoreArray.length; i++) {
            if((scoreArray[i])=='win'){
                p+=1;
            }
            else if((scoreArray[i])=='lose'){
                c+=1;
            }
            else if((scoreArray[i])=='draw'){
                
            }
        }
        setInterval(function(){
            if (c < p) {
                box_state.innerText = "You WIN!";
                p_state.innerHTML = "";
                c_state.innerHTML = "";
            }
            else if(c > p){
                box_state.innerText = "Computer WINS!";
                p_state.innerHTML = "";
                c_state.innerHTML = "";
            }
            else if(c == p){
                box_state.innerHTML = "Draw! Play Again!";
                p_state.innerHTML = "";
                c_state.innerHTML = "";
            }
        } ,1000)
        
    }
}
function reset(){
    formhidden.style.display = "block";
    gamehidden.style.display = "none";
}

function main() {
    arrayC = setDeck(rundenAnzahl); //e.g. [2, 1, 0]
    arrayP = setDeck(rundenAnzahl);
    setIndexBoth();

    //when player plays game starts IF_BEDINGUNG!FEHLT!
    player_hand1.addEventListener('click', function () {
        if (arrayP[0] > 0) {
            game("r");

            //index change
            arrayP[0]--;
            p_index1.innerHTML = arrayP[0];
            p_state.innerHTML = images_pHand[0];
        } else {
            fehler_unten.innerHTML = "No Rocks left. Please choose again";
            setTimeout(function () {
                fehler_unten.innerHTML = "";
            }, 3000);
        }
        setGreyTone();
        isTheGameOver();
    })
    player_hand2.addEventListener('click', function () {
        if (arrayP[1] > 0) {
            game("p");

            //index change
            arrayP[1]--;
            p_index2.innerHTML = arrayP[1];
            p_state.innerHTML = images_pHand[1];
        } else {
            fehler_unten.innerHTML = "No Paper left. Please choose again";
            setTimeout(function () {
                fehler_unten.innerHTML = "";
            }, 3000);
        }

        setGreyTone();
        isTheGameOver();
    })
    player_hand3.addEventListener('click', function () {
        if (arrayP[2] > 0) {
            game("s");

            //index change
            arrayP[2]--;
            p_index3.innerHTML = arrayP[2];
            p_state.innerHTML = images_pHand[2];
        } else {
            fehler_unten.innerHTML = "No Scissor left. Please choose again";
            setTimeout(function () {
                fehler_unten.innerHTML = "";
            }, 3000);
        }

        setGreyTone();
        isTheGameOver();
    })

    //RESET
    document.getElementById("back_button").addEventListener('click', function(){
    reset(); 
    })
}

// main();
main_form();