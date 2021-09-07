// ECMAScript 2015 (ES6)
const cars = ["Saab", "Volvo", "BMW"];

// Cannot be Reassigned
// An array declared with const cannot be reassigned:

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"]; // ERROR

// Arrays are Not Constants
// Elements Can be Reassigned
// You can create a constant array:

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// Assigned when Declared
const cars;
cars = ["Saab", "Volvo", "BMW"];

// using var
cars = ["Saab", "Volvo", "BMW"];
var cars; // This is ok

// Const Block Scope
const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"

// An array declared with var does not have block scope:

var cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  var cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"

// Redeclaring Arrays
// Redeclaring an array declared with var is allowed anywhere in a program:

var cars = ["Volvo", "BMW"]; // Allowed
var cars = ["Toyota", "BMW"]; // Allowed
cars = ["Volvo", "Saab"]; // Allowed

// example
var cars = ["Volvo", "BMW"]; // Allowed
const cars = ["Volvo", "BMW"]; // Not allowed
{
  var cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
}

// Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed:

const cars = ["Volvo", "BMW"]; // Allowed
const cars = ["Volvo", "BMW"]; // Not allowed
var cars = ["Volvo", "BMW"]; // Not allowed
cars = ["Volvo", "BMW"]; // Not allowed

{
  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"]; // Not allowed
  cars = ["Volvo", "BMW"]; // Not allowed
}

// Redeclaring an array with const, in another scope, or in another block, is allowed:

const cars = ["Volvo", "BMW"]; // Allowed
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
