let temperature = 25;

// Test 1: Is the temperature greater than or equal to 32 degrees Fahrenheit?
console.log("Is temperature >= 32? I predict True.");
console.log(temperature >= 32); // True, because 25 is greater than or equal to 32.

// Test 2: Is the temperature less than 20 degrees Celsius?
console.log("Is temperature < 20? I predict True.");
console.log((temperature - 32) * 5/9 < 20); // True, because 25°F is approximately -3.89°C, which is less than 20°C.

let isSunny = true;
let isWindy = false;

// Test 3: Is it sunny and not windy?
console.log("Is it sunny and not windy? I predict True.");
console.log(isSunny && !isWindy); // True, because it's sunny and not windy.

let age = 18;
let hasID = true;

// Test 4: Is the person at least 18 years old or do they have an ID?
console.log("Is the person at least 18 or do they have an ID? I predict True.");
console.log(age >= 18 || hasID); // True, because the person is 18 years old.

let username = "admin";
let password = "secret123";

// Test 5: Does the username equal 'admin' and the password equal 'secret123'?
console.log("Does the username and password match? I predict True.");
console.log(username === "admin" && password === "secret123"); // True, because both username and password match.

// Test 6: Is the temperature less than 20 and not windy?
console.log("Is temperature < 20 and not windy? I predict False.");
console.log((temperature - 32) * 5/9 < 20 && !isWindy); // False, because it's not windy.
