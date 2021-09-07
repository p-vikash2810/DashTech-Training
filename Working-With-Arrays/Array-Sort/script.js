// Sorting an Array

// The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sorts the elements of fruits
console.log(fruits.sort());

// Reversing an Array
fruits.reverse(); // reverse the order of the elements

// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

// Sorting an Array in Random Order
points.sort(function (a, b) {
  return 0.5 - Math.random();
});

// Find the Highest (or Lowest) Array Value
points.sort(function (a, b) {
  return a - b;
});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

// Using Math.max() on an Array
function myArrayMax(arr) {
  return Math.max.apply(null, arr); // Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).
}
console.log(myArrayMax([10, 3, 5]));

// Using Math.min() on an Array
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

// My Min / Max JavaScript Methods

//Example (Find Max)
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

// Example (Find Min)
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

// Sorting Object Arrays
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort(function (a, b) {
  return a.year - b.year;
});
