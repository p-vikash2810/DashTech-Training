// Creating an Array
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

const newCars = new Array("Saab", "Volvo", "BMW"); // using keyword new
console.log(newCars);

// Accessing Array Elements.
let car1 = cars[0];
let car2 = cars[1];
console.log(car1, car2);

// Changing an Array Element
cars[0] = "Opel";
console.log(cars);

// Arrays are Objects
const person = ["John", "Doe", 46]; // array can store variables of different types in the same Array
console.log(typeof person);

const myArray = [];
myArray[0] = Date.now;
myArray[1] = function () {
  console.log("I am function");
};
myArray[2] = cars;
console.log(myArray);

////////////// Array Properties and Methods

// The length Property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

console.log(fruits[fruits.length - 1]); // return Mango (last element of array)

///////////////////////  Looping array elements

// For loop

// let fLen = fruits.length;

// text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// console.log(text);

// forEach method

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
console.log(text);

// Adding Array Elements
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits at the end
console.log(fruits);

fruits[fruits.length] = "Pineapple"; // Adds "Lemon" to fruits
console.log(fruits);

fruits[10] = "Guava";  // Creates undefined "holes" in fruits
console.log(fruits);


// A Common Error
const points = [40]; 
console.log(points);

const point = new Array(40); // create an array with length of 40
console.log(point);

// How to Recognize an Array

typeof fruits;    // returns object
Array.isArray(fruits);   // returns true
fruits instanceof Array   // returns true