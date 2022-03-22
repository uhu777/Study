// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2 );
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y; 
x -= y; // x = x - y;
x *=y ; // x = x * y;
x /= y ; // x = x / y ;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6);// greator than
console.log(10 >= 6);// greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// ||, && 무거운 오퍼레이션일 경우 뒤에서 배치! 앞에서 부터 연산 true / false 증명

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
    for(let i = 0; i<10; i++) {
        //wasting time
        console.log('😨');
    }
    return true;
}

// ! (not)  false -> true / true -> fakse 값을 반대로 변경
console.log(`!: ${!value1}`);

// 7. Equlity
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(`ellie1 == ellie2: ${ellie1 == ellie2}`);
console.log(`ellie1 === ellie2: ${ellie1 === ellie2}`);
console.log(`ellie1 === ellie3: ${ellie1 === ellie3}`);

// equality - puzzler
console.log(`0 == false: ${0 == false}`);
console.log(`0 === false: ${0 === false}`);
console.log(`'' == false: ${'' == false}`);
console.log(`'' === false: ${'' === false}`);
console.log(`null == undefined: ${null == undefined}`);
console.log(`null === undefined: ${null === undefined}`);

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
    console.log('welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown')
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser ='Chrome';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    case 'Chrome' :
    case 'Firefox' :
        console.log('Love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy.
// body code is executed.
// while은 statement가 false로 나오기전까지 반복됨
let i = 5;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 먼저 블럭을 실행하고 조건이 맞는지 안맞는지 확인
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition ; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <10; j++) {
        console.log(`ij: ${i}${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use countinue)
for (let z=0; z <= 10; z++){
    if (z % 2 === 0) {
        console.log(`Q1: ${z}`);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let x=0; x <= 10; x++) {
    if (x == 9) {
        break;
    }
    console.log(`Q2: ${x}`);
}