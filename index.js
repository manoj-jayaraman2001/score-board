let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");


// let curGuest = parseInt(guestScore.value);


var btns = document.getElementsByClassName("btn");
var Highlight = function(){
    if(parseInt(homeScore.value) > parseInt(guestScore.value)){
        document.getElementById("home-score").style.boxShadow = "0px 0px 10px white";
        document.getElementById("guest-score").style.boxShadow = "0px 0px 0px white";
    }
    if(parseInt(homeScore.value) < parseInt(guestScore.value)){
        document.getElementById("guest-score").style.boxShadow = "0px 0px 10px white";
        document.getElementById("home-score").style.boxShadow = "0px 0px 0px white";
    }
    if(parseInt(homeScore.value) == parseInt(guestScore.value)){
        document.getElementById("guest-score").style.boxShadow = "0px 0px 10px green";
        document.getElementById("home-score").style.boxShadow = "0px 0px 10px green";
    }
}

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', Highlight , false)
}

function home1(){
    homeScore.value = parseInt(homeScore.value) + 1;
}

function home2(){
    homeScore.value = parseInt(homeScore.value) + 2;
}

function home3(){
    homeScore.value = parseInt(homeScore.value) + 3;
}

function g1(){
    guestScore.value = parseInt(guestScore.value) + 1;
}

function g2(){
    guestScore.value = parseInt(guestScore.value) + 2;
}

function g3(){
    guestScore.value = parseInt(guestScore.value) + 3;
}

function reset(){
    homeScore.value = 0;
    guestScore.value = 0;
}