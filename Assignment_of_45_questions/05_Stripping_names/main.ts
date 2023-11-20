// Store the name with leading and trailing whitespace
let nameWithWhitespace: string = '\t\n   Muhib Ullah Khan   \t\n';

// Print the name with whitespace
console.log(`Name with Whitespace: "${nameWithWhitespace}"`); 

// Strip the whitespace and print the name
let strippedName: string = nameWithWhitespace.trim();
console.log(`Stripped Name: "${strippedName}"`);
