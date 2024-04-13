"use strict";
// More Conditional Tests: 
Object.defineProperty(exports, "__esModule", { value: true });
// Tests for equality and inequality with strings
var string1 = 'Islam';
var string2 = 'Hinduisb';
console.log("Is string1 equal to 'Islam'? I predict True.");
console.log(string1 == 'Islam'); // (True)
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 != string2); // True
// Tests using the lower case function
var str = 'Islam';
console.log("Is str Uppercase 'ISLAM'? I predict true.");
console.log(str.toUpperCase());
console.log(str.toUpperCase() == 'ISLAM'); //(TRUE)
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2); //(True)
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2); //(False)
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
console.log("Is x greater than 3 and y less than 15? I predict True.");
console.log(x > 3 && y < 15); //(True)
console.log("Is x less than 3 or y greater than 15? I predict False.");
console.log(x < 3 || y > 15); //False
// Test whether an item is in an array
var numbers = [1, 2, 3, 4, 5];
console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers, (3)); // (True)
// Test whether an item is not in an array
console.log("Is 6 not in the numbers array? I predict True.");
console.log(numbers, (6)); //(True)
