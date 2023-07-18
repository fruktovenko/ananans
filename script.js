//переменные
var textNumber = document.querySelector(".number"); //querySelector("название") - ищет в html нужный блок по названию класса, тега или идентификатора
var numb = 1;
var str = 'string';

var buttons = document.querySelectorAll("button");

const baseColor = document.querySelector("button").style.backgroundColor;

//функции
function plusOne() {
    textNumber.textContent = Number(textNumber.textContent) + 1;
}

function plusSomething(number) {
    textNumber.textContent = Number(textNumber.textContent) + Number(number);
}

function setZero() {
    textNumber.textContent = 0
}

function changeColorPink() {
    console.log('Сейчас все поменяю на розовый!');
    buttons.forEach(button => {
        console.log('Поменял на розовый кнопку!');
        button.style.backgroundColor = "pink";
    });

    for(i = 0; i< 4; i++){
        console.log(`${i}`);
    }
    
    var i = 0
    while(i< 4){
        console.log(`${i}`);
        i++;
    }
}

function changeColorWhite() {
    buttons.forEach(button => {
        button.style.backgroundColor = baseColor;
    })
}