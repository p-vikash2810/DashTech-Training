// Array.forEach()

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

// Array.map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

// Array.filter()
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Array.reduce()
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

/* 
Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
 */

// The reduce() method can accept an initial value:
let sum1 = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

// Array.reduceRight()
let sum2 = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

// Array.every()
/* 
The every() method check if all array values pass a test.

This example check if all array values are larger than 18:
 */
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(allOver18);


// Array.some()
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);

// Array.indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
// Array.indexOf() returns -1 if the item is not found.
//If the item is present more than once, it returns the position of the first occurrence.

// Array.lastIndexOf()
let position2 = fruits.lastIndexOf("Apple") + 1;

// Array.includes()
fruits.includes("Mango"); // is true

// Array.find()
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first);

// Array.findIndex()
let firstIndex = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(firstIndex);

// Array.from()
Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]

// Array.Keys()
const keys = fruits.keys();
// console.log(...keys);
for (let x of keys) {
    console.log(x);
  }
