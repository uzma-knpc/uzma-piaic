// More Conditional Tests: 

import { Console } from "console";

// Tests for equality and inequality with strings
let string1 = 'Islam';
let string2 = 'Hinduisb'
console.log("Is string1 equal to 'Islam'? I predict True.");
console.log(string1 == 'Islam'); // (True)

console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 != string2); // True

// Tests using the lower case function
let str = 'Islam';
console.log("Is str Uppercase 'ISLAM'? I predict true.");
console.log(str.toUpperCase())
console.log(str.toUpperCase() == 'ISLAM'); //(TRUE)

// Numerical tests
let num1 = 10;
let num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2); //(True)

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2); //(False)

// Tests using "and" and "or" operators
let x = 5;
let y = 10;
console.log("Is x greater than 3 and y less than 15? I predict True.");
console.log(x > 3 && y < 15); //(True)

console.log("Is x less than 3 or y greater than 15? I predict False.");
console.log(x < 3 || y > 15); //False

// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];
console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers,(3)); // (True)

// Test whether an item is not in an array
console.log("Is 6 not in the numbers array? I predict True.");
console.log(numbers,(6)); //(True)