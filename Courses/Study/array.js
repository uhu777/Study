'use strict';

// Araay

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍔', '🍗','🌭'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[fruits.length - 1]);


console.clear();
// 3. Looping over an array
// print all fruits
// a. for

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit,index) => console.log(fruit,index));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🥩','🌮');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🧀','🍜');
console.log(fruits);

// shitf: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 각 데이터를 뒤로 밀거나 당겨오기 때문에 느림 / 뒤 또는 중간에 넣는 것은 빠름

// spice: remove an item by index position
fruits.push('🥐','🍿','🥞');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'🍞','🥯');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍘','🍙'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍞'));
console.log(fruits.indexOf('🥞'));
console.log(fruits.indexOf('🍘'));

// includes
console.log(fruits.includes('🥞'));
console.log(fruits.includes('🍘'));

// lastIndexOf
// 같은 값을 가지고 있을 경우 lastIndexOf 를 사용하면 마지막으로 사용한 값을 출력할 수 있음
console.clear();
fruits.push('🍔');
console.log(fruits);
console.log(fruits.indexOf('🍔'));
console.log(fruits.lastIndexOf('🍔'));