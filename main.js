"use strict";


// 1

function chetniChisla(a, b) {
    for (let i = a; i <= b; i += 2) {
        alert(i)
    }
}

let a = Number(prompt("Первое число"));
let b = Number(prompt("Второе число"));
chetniChisla(a, b);

// 2

let i = 0;

while (i < 3) {
    alert(`Число ${i}!`);
    i++;
}

// 3

let number = Number(prompt("Введите число"));
while (number <= 10) {
    number = Number(prompt("Введите число"));
}
alert("Вы ввели число больше 10");
alert(number);

// 4

let c = Number(prompt("Первое число"));
let d = Number(prompt("Второе число"));
function min(c, d) {
    let result;
    if (c < d) result = c;
    else result = d;
    return result;
}

alert(`Меньшее число, ${min(c, d)}`);

// 5

const que = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

que(
    "Вы согласны?",
    () => { alert("ДАААААА."); },
    () => { alert("Отмена"); }
);

// 6

let age = Number(prompt("Ваш возраст"));
function checkage() {
    return age > 18 || confirm("Мама разрешила?");
}

checkage();
