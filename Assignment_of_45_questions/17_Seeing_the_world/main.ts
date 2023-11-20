
let placesToVisit = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];


console.log("Original Order:");
console.log(placesToVisit);


console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort());


console.log("\nArray is still in its original order:");
console.log(placesToVisit);


console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());


console.log("\nArray is still in its original order:");
console.log(placesToVisit);


placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);


placesToVisit.reverse();
console.log("\nRestored to Original Order:");
console.log(placesToVisit);


placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);


placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
