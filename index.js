// alert("Im Working. Im JS. Im Beauriful.");
console.log('Im Working. Im JS. Im Beauriful.');
/*
variable 변수
생성 - 초기화 - 사용
let a = 221;

const : 상수
const a = 221;

*/

/* String
const what = "SeungHyun";
console.log(what); 
*/

/*
Boolean (true = 1 / false = 0)
const what = true;
*/

/*
Number 
const what = 66;
*/

/*
Float (소수)
const float_num = 55.1;
*/

// Array (배열) - 시작은 0부터
const someThing = "Something";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", 
"Fri", "Sat", "Sun", someThing];

// Object variable(key): value
const someInfo = {
    name: "Seunghyun",
    age: 26,
    gender: "Male",
    favMovies: ["신과함께", "어벤져스"],
    favFood: [
    {
        name: "김치",
        fatty:false
    },
    {
        name: "볶음밥", 
        fatty: true
    }
    ]
}
// Object를 Array에 넣을 수 있다.

// function (함수)
/* 매우 안좋은 방법
function sayHello(name, num) {
    console.log('Hello', name, " your age is", num + "years old.");
}
*/

function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`;
}

const gereet = sayHello("SeungHyun", 15);
console.log(gereet);

const calculator = {
    plus: function(a, b) {
        return a + b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);

/*
// DOM function 자바스크립트를 이용해 HTML을 수정!
const title = document.querySelector("#title");
title.innerHTML = "Hi JS!";
title.style.color = 'red';
document.title = 'I own you now';
console.dir(title);

// Event
function handle(event) {
    console.log(event)
}

function handleClick() {
    title.style.color = "blue";
}
window.addEventListener("resize", handle);
title.addEventListener("click", handleClick);
*/

/*

// if(조건문)
const age = prompt("How old are you?");
// prompt함수는 좋지 않음!

if (age > 18) {
    console.log("you can drink");
} else {
    console.log("you can't it");
}

*/

/*const title = document.querySelector("#title");
const BASE_COLOR = "aqua";
const OTHER_COLOR = "#7f8c8d";

function  handlClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(params) {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handlClick);
}
init();
*/

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
}