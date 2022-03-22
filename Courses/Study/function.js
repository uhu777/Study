// Function
// - fundamental building block in the program
// - subprogram can be used multiple itmes
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, pram2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCarandpoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message);
}

log('Hi');

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i=0; i < args.length; i++) {
        console.log(args[i]);
        console.dir(args);
    }
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    // 바깥 변수를 안에서 선언 가능하지만, 내부 변수를 밖에서 선언 불가능(한가지 방법은 있음)
    function printAnother() {
        console.log(message);
        let childMessage = 'hallo';
    }
    // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${result}`);


// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

// First-class function
// functions are treated like any otehr variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { //function 함수에 이름이 없는 경우 -> anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

// Arrow function
// always anonymous
//const simplePrint = function() {
//    console.log('simplePrint');
//};

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b; // Arrow function에서 블럭을 사용할 경우 return을 꼭 해줘야 함
}

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multifly, remainder

function calculate (command, a, b) {
    if (command === 'add'){
    console.log(a + b);
} if (command == 'substract') {
    console.log(a - b);
} if (command == 'divide'){
    console.log(a / b);
} if (command == 'multiply'){
    console.log(a * b);
} if (command == 'remainder'){
    console.log(a % b);
}
}

calculate('multiply',3,15);