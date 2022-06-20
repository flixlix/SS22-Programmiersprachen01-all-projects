var a = 0;
let userScore = 0;
let computerScore = 0;
const rock_select_div = document.querySelector(".rock-selected");
const rock_div = document.querySelector(".choice-rock");
const paper_select_div = document.querySelector(".paper-selected");
const paper_div = document.querySelector(".choice-paper")
const scissors_select_div = document.querySelector(".scissors-selected");
const scissors_div = document.querySelector(".choice-scissors");
const battle_div = document.querySelector(".battle");
const rock_game = document.querySelector(".rock-computer");
const paper_game = document.querySelector(".paper-computer");
const scissors_game = document.querySelector(".scissors-computer");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const winresult_div = document.querySelector(".winresult");
const loseresult_div = document.querySelector(".loseresult");
const drawresult_div = document.querySelector(".drawresult");
const mainmenu_header = document.querySelector(".mainmenu");
const play_again_div = document.querySelector(".play-again")
const computer_rock = document.querySelector(".choice-rock-computer");
const computer_paper = document.querySelector(".choice-paper-computer");
const computer_scissors = document.querySelector(".choice-scissors-computer");
const score_div = document.querySelector(".score-board");
const home_div = document.querySelector(".home");
const rules_div= document.querySelector(".rules");
const rules_button= document.querySelector(".rules-button");
const hide_rules_button= document.querySelector(".hide-rules-button");
const play_div = document.querySelector(".play");
const mute_div = document.querySelector(".mute");
const audio_audio = document.querySelector(".audio")



rock_div.onclick = function (){
    rules_button.style.display="flex";
    hide_rules_button.style.display="none";
    rules_div.style.display="none";
    rock_select_div.style.display= "flex";
    paper_select_div.style.display="none";
    scissors_select_div.style.display="none";
    rock_game.style.display="none";
    paper_game.style.display="none";
    scissors_game.style.display="none";
    winresult_div.style.display="none";
    loseresult_div.style.display="none";
    drawresult_div.style.display="none";
    a=1;
}

paper_div.onclick = function (){
    rules_button.style.display="flex";
    hide_rules_button.style.display="none";
    rules_div.style.display="none";
    rock_select_div.style.display= "none";
    scissors_select_div.style.display="none";
    paper_select_div.style.display="flex";
    rock_game.style.display="none";
    paper_game.style.display="none";
    scissors_game.style.display="none";
    winresult_div.style.display="none";
    loseresult_div.style.display="none";
    drawresult_div.style.display="none";
    a=2;
}

scissors_div.onclick = function (){
    rules_button.style.display="flex";
    hide_rules_button.style.display="none";
    rules_div.style.display="none";
    rock_select_div.style.display= "none";
    paper_select_div.style.display="none";
    scissors_select_div.style.display="flex";
    rock_game.style.display="none";
    paper_game.style.display="none";
    scissors_game.style.display="none";
    winresult_div.style.display="none";
    loseresult_div.style.display="none";
    drawresult_div.style.display="none";
    a=3;
}

battle_div.onclick = function(){
    rules_button.style.display="flex";
    hide_rules_button.style.display="none";
    rules_div.style.display="none";
    function getComputerChoice() {
        const choices = ['r', 'p', 's'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

function rockwin(){
    rock_game.style.display="none";
    paper_game.style.display="none";
    scissors_game.style.display="flex";
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    winresult_div.style.display="flex";
    loseresult_div.style.display="none";
    drawresult_div.style.display="none";
}

function rockdraw(){
    rock_game.style.display="flex";
    paper_game.style.display="none";
    scissors_game.style.display="none";
    winresult_div.style.display="none";
    loseresult_div.style.display="none";
    drawresult_div.style.display="flex";
}

function rocklose(){
    rock_game.style.display="none";
    paper_game.style.display="flex";
    scissors_game.style.display="none";
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    winresult_div.style.display="none";
    loseresult_div.style.display="flex";
    drawresult_div.style.display="none";
}

function paperwin(){
    rock_game.style.display="flex";
    paper_game.style.display="none";
    scissors_game.style.display="none";
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    winresult_div.style.display="flex";
    loseresult_div.style.display="none";
    drawresult_div.style.display="none";
}

function paperdraw(){
    rock_game.style.display="none";
    paper_game.style.display="flex";
    scissors_game.style.display="none";
    winresult_div.style.display="none";
    loseresult_div.style.display="none";
    drawresult_div.style.display="flex";
}

function paperlose(){
    rock_game.style.display="none";
    paper_game.style.display="none";
    scissors_game.style.display="flex";
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    winresult_div.style.display="none";
    loseresult_div.style.display="flex";
    drawresult_div.style.display="none";
}

function scissorswin(){
    rock_game.style.display="none";
    paper_game.style.display="flex";
    scissors_game.style.display="none";
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    winresult_div.style.display="flex";
    loseresult_div.style.display="none";
    drawresult_div.style.display="none";
}

function scissorsdraw(){
    rock_game.style.display="none";
    paper_game.style.display="none";
    scissors_game.style.display="flex";
    winresult_div.style.display="none";
    loseresult_div.style.display="none";
    drawresult_div.style.display="flex";
}

function scissorslose(){
    rock_game.style.display="flex";
    paper_game.style.display="none";
    scissors_game.style.display="none";
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    winresult_div.style.display="none";
    loseresult_div.style.display="flex";
    drawresult_div.style.display="none";
}

    function game(){
        if(a==1 && getComputerChoice() =='r'){
            rockdraw();
        }
        else if(a==1 && getComputerChoice()=='p'){
            rocklose();
        }
        else if(a==1 && getComputerChoice()=='s'){
            rockwin();
        }
        else if(a==2 && getComputerChoice()=='r'){
            paperwin();
        }
        else if(a==2 && getComputerChoice()=='p'){
            paperdraw();
        }
        else if(a==2 && getComputerChoice()=='s'){
            paperlose();    
        }
        else if(a==3 && getComputerChoice()=='r'){
            scissorslose();
        }
        else if(a==3 && getComputerChoice()=='p'){
            scissorswin();
        }
        else if(a==3 && getComputerChoice()=='s'){
            scissorsdraw();
        }
    }
    game()
    getComputerChoice()

    function round(){
        let b=computerScore;
        let c=userScore;
        if (b==3 || c==3){
            play_again_div.style.display= "flex";
            battle_div.style.display= "none";
            rock_select_div.style.display= "none";
            paper_select_div.style.display="none";
            scissors_select_div.style.display="none";
            rock_game.style.display="none";
            paper_game.style.display="none";
            scissors_game.style.display="none";
            winresult_div.style.display="none";
            loseresult_div.style.display="none";
            drawresult_div.style.display="none";
            rock_game.style.display="none";
            paper_game.style.display="none";
            scissors_game.style.display="none";
            rock_div.style.display="none";
            paper_div.style.display="none";
            scissors_div.style.display="none";
            computer_rock.style.display="none";
            computer_paper.style.display="none";
            computer_scissors.style.display="none";
        }
        if(c==3){
            winresult_div.style.display="flex";
            loseresult_div.style.display="none";
            score_div.classList.add('green-bg');
            document.querySelector(".audio1").play();
            document.querySelector("audio").pause();
        }
        else if(b==3){
            winresult_div.style.display="none";
            loseresult_div.style.display="flex";
            score_div.classList.add('red-bg');
            document.querySelector(".audio2").play();
            document.querySelector("audio").pause();
        }
    }
    round();
    }



    play_again_div.onclick = function(){
        play_again_div.style.display= "none";
            battle_div.style.display= "inline";
            rock_select_div.style.display= "none";
            paper_select_div.style.display="none";
            scissors_select_div.style.display="none";
            rock_game.style.display="none";
            paper_game.style.display="none";
            scissors_game.style.display="none";
            winresult_div.style.display="none";
            loseresult_div.style.display="none";
            drawresult_div.style.display="none";
            rock_game.style.display="none";
            paper_game.style.display="none";
            scissors_game.style.display="none";
            rock_div.style.display="flex";
            paper_div.style.display="flex";
            scissors_div.style.display="flex";
            computer_rock.style.display="flex";
            computer_paper.style.display="flex";
            computer_scissors.style.display="flex";
            a=0
            userScore=0
            computerScore=0
            userScore_span.innerHTML = userScore;
            computerScore_span.innerHTML = computerScore;
            score_div.classList.remove('green-bg');
            score_div.classList.remove('red-bg');
            rules_div.style.display="none";
            playSong();
    }

    home_div.onclick = function(){
        window.location.href="mainpage.html";
    }

    rules_button.onclick = function (){
        rules_div.style.display="flex";
        rules_button.style.display="none";
        hide_rules_button.style.display="flex";
    }
    
    hide_rules_button.onclick = function (){
        rules_div.style.display="none";
        rules_button.style.display="flex";
        hide_rules_button.style.display="none";
    }

    function playSong(){
        document.querySelector("audio").play();
    }

    function play(){
        mute_div.style.display="flex";
        play_div.style.display="none";  
        audio_audio.muted=true;
    }
    
    function show3(){
        play_div.addEventListener('click', function(){
            play();
        })
    }
    
    show3();
    
    function mute(){
        mute_div.style.display="none";
        play_div.style.display="flex";
        audio_audio.muted=false;
    }
    
    function show4(){
        mute_div.addEventListener('click', function(){
            mute();
        })
    }
    show4();


    window.onload = function() {
        playSong();
      }