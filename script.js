"use strict"
let expr = "";
let num = document.getElementsByClassName("calcButtons");
let numButtonContent = "";
let exprShow = document.getElementById("exprShow");
let buttonAudio = document.getElementById("buttonAudio");
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function () {
        playAudio();
        numButtonContent = num[i].textContent;
        expr += numButtonContent
        exprShow.textContent += numButtonContent;
    });
}

function equals() {
    playAudio();
    let result = eval(expr);
    exprShow.textContent = result;
    expr = result;
}

function playAudio() {
    if (buttonAudio.paused) {
        buttonAudio.play();
    } else {
        buttonAudio.currentTime = 0;
    }
}