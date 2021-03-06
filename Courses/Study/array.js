'use strict';

// Araay

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['đ', 'đ','đ­'];
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
fruits.push('đĽŠ','đŽ');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('đ§','đ');
console.log(fruits);

// shitf: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// ę° ë°ě´í°ëĽź ë¤ëĄ ë°ęą°ë ëšę˛¨ě¤ę¸° ëëŹ¸ě ëëŚź / ë¤ ëë ě¤ę°ě ëŁë ę˛ě ëš ëŚ

// spice: remove an item by index position
fruits.push('đĽ','đż','đĽ');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'đ','đĽŻ');
console.log(fruits);

// combine two arrays
const fruits2 = ['đ','đ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('đ'));
console.log(fruits.indexOf('đĽ'));
console.log(fruits.indexOf('đ'));

// includes
console.log(fruits.includes('đĽ'));
console.log(fruits.includes('đ'));

// lastIndexOf
// ę°ě ę°ě ę°ě§ęł  ěě ę˛˝ě° lastIndexOf ëĽź ěŹěŠíëŠ´ ë§ě§ë§ěźëĄ ěŹěŠí ę°ě ěśë Ľí  ě ěě
console.clear();
fruits.push('đ');
console.log(fruits);
console.log(fruits.indexOf('đ'));
console.log(fruits.lastIndexOf('đ'));