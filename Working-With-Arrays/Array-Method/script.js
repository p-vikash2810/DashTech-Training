// Converting Arrays to Strings
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());  // toString method
console.log(fruits.join(' '));  // join method

// Popping
// The pop() method removes the last element from an array:
let x = fruits.pop();  // Removes "Mango" from fruits
console.log(x); // return "Mango" (The pop() method returns the value that was "popped out":)


// Pushing
 let y = fruits.push("Kiwi");   // Adds "Kiwi" to fruits
 console.log(y);  // return 4 (The push() method returns the new array length:)

// Shifting Elements
let p = fruits.shift();   // Removes "Banana" from fruits
console.log(p);  // return "Banana" ( The shift() method returns the value that was "shifted out": )

// unshifting
 let q = fruits.unshift("Lemon");  // Adds "Lemon" to fruits
 console.log(q); // return 4 (The unshift() method returns the new array length.)

 // Deleting Elements
 delete fruits[0];           // Changes the first element in fruits to undefined

 // Splicing an Array
 const splicedFruits = fruits.splice(2, 0, "Lemon", "Kiwi");
 console.log(fruits);
 console.log(splicedFruits); // The splice() method returns an array with the deleted items:

 // Using splice() to Remove Elements
 const removedFruit = fruits.splice(0, 1);   // Removes the first element
console.log(removedFruit);
console.log(fruits);

// Slicing an Array
const citrus = fruits.slice(1);
console.log(citrus);
console.log(fruits);

const citrus1 = fruits.slice(1, 3);
console.log(citrus1);
console.log(fruits);

// Merging (Concatenating) Arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

// Concatenate (join) myGirls and myBoys
const myChildren = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(myChildren);

const arr3 = ["Robin", "Morgan"];
const allChildren = arr1.concat(arr2, arr3);
console.log(allChildren);

// The concat() method can also take strings as arguments:
const myElderChildren = arr1.concat("Peter"); 
console.log(myElderChildren);


