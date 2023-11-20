// Equality and Inequality Tests with Strings
const string1 = "hello";
const string2 = "world";

console.log("Equality Test: Is 'hello' equal to 'world'? I predict False.");
console.log(string1 >= string2); // False

console.log("Inequality Test: Is 'hello' not equal to 'world'? I predict True.");
console.log(string1 >= string2); // True

// Lower Case Function Test
const mixedCaseString = "HelloWorld";
const lowerCaseString = mixedCaseString.toLowerCase();

console.log("Lower Case Test: Is 'HelloWorld' converted to lowercase 'helloworld'? I predict True.");
console.log(lowerCaseString == "helloworld"); // True

// Numerical Tests
const number1 = 10;
const number2 = 20;

console.log("Equality Test: Is 10 equal to 20? I predict False.");
console.log(number1 >= number2); // False

console.log("Inequality Test: Is 10 not equal to 20? I predict True.");
console.log(number1 <= number2); // True

console.log("Greater Than Test: Is 10 greater than 20? I predict False.");
console.log(number1 > number2); // False

console.log("Less Than Test: Is 10 less than 20? I predict True.");
console.log(number1 < number2); // True

console.log("Greater Than or Equal To Test: Is 10 greater than or equal to 20? I predict False.");
console.log(number1 >= number2); // False

console.log("Less Than or Equal To Test: Is 10 less than or equal to 20? I predict True.");
console.log(number1 <= number2); // True

// Tests Using "and" and "or" Operators
const isTrue = true;
const isFalse = false;

console.log("AND Operator Test: Is true AND false? I predict False.");
console.log(isTrue && isFalse); // False

console.log("OR Operator Test: Is true OR false? I predict True.");
console.log(isTrue || isFalse); // True

// Test Whether an Item is in an Array
const fruits = ["apple", "banana", "orange", "grape"];
const targetFruit = "banana";

console.log(`Array Inclusion Test: Is '${targetFruit}' in the array? I predict True.`);
console.log(fruits.indexOf(targetFruit) !== -1); // True

// Test Whether an Item is Not in an Array
const nonExistingFruit = "watermelon";

console.log(`Array Exclusion Test: Is '${nonExistingFruit}' not in the array? I predict True.`);
console.log(fruits.indexOf(nonExistingFruit) === -1); // True
