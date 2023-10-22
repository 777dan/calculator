"use strict"
let expr = "";
let num = document.getElementsByClassName("numButtons");
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

let calc = document.getElementsByClassName("calcButtons");
let calcButtonContent = "";
for (let i = 0; i < calc.length; i++) {
    calc[i].addEventListener("click", () => {
        playAudio();
        if (+expr[expr.length - 1] >= 0) {
            calcButtonContent = calc[i].textContent;
            expr += calcButtonContent
            exprShow.value += calcButtonContent;
        }
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
    expr = result.toString();
});

let removeButton = document.getElementById("removeButton");
removeButton.addEventListener("click", () => {
    playAudio();
    exprShow.value = exprShow.value.slice(0, -1);
    expr = expr.slice(0, -1);
});

let sqrtButton = document.getElementById("sqrtButton");
sqrtButton.addEventListener("click", () => {
    playAudio();
    if (expr.length > 1) {
        expr = eval(expr);
    }
    exprShow.value = Math.sqrt(expr);
    expr = Math.sqrt(expr);
});

let squareButton = document.getElementById("squareButton");
squareButton.addEventListener("click", () => {
    playAudio();
    if (expr.length > 1) {
        expr = eval(expr);
    }
    exprShow.value = expr * expr;
    expr = expr * expr;
});

let playAudio = () => {
    if (buttonAudio.paused) {
        buttonAudio.play();
    } else {
        buttonAudio.currentTime = 0;
    }
}