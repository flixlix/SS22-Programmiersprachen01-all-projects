const startgame_h1 = document.querySelector(".start-game");
const oneplayer_h2 = document.querySelector(".one-player");
const twoplayers_h2 = document.querySelector(".two-players");
const select_div = document.querySelector(".select");
const select_two_div = document.querySelector(".select-two");
const play_div = document.querySelector(".play");
const mute_div = document.querySelector(".mute");
const audio_audio = document.querySelector(".audio")
var link = "finalgame.html";

function hide(){
    select_two_div.style.display="none";
    select_div.style.display="inline";
}

function show1(){
    oneplayer_h2.addEventListener('click', function(){
        hide();
    })
}

show1();

function hidetwo(){
    select_div.style.display="none";
    select_two_div.style.display="inline"
}


function show2(){
    twoplayers_h2.addEventListener('click', function(){
        hidetwo();
    })
}

show2();

function oneplayer(){
    oneplayer_h2.onclick= function(){
        link="finalgame.html";
    }
    twoplayers_h2.onclick= function(){
        link="index.html";
    }
}
oneplayer()


startgame_h1.onclick=function(){
    if(link=="finalgame.html"){
        window.location.href=link;
    }
    else if(link=="index.html"){
        window.location.href=link;
    }
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
    document.querySelector(".audio").play();
  }