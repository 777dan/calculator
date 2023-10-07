"use strict"
let expr = "";
let num = document.getElementsByClassName("calcButtons");
let numButtonContent = "";
let exprShow = document.getElementById("exprShow");
let buttonAudio = document.getElementById("buttonAudio");
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", () => {
        playAudio();
        numButtonContent = num[i].textContent;
        expr += numButtonContent
        exprShow.value += numButtonContent;
    });
}

let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
    playAudio();
    exprShow.value = "";
    expr = "";
});

let equalsButton = document.getElementById("equalsButton");
equalsButton.addEventListener("click", () => {
    playAudio();
    let result = eval(expr);
    exprShow.value = result;
    expr = result;
});

let playAudio = () => {
    if (buttonAudio.paused) {
        buttonAudio.play();
    } else {
        buttonAudio.currentTime = 0;
    }
}