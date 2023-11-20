var fruits = ["apple", "banana", "orange"];
// Intentional error: Accessing an out-of-range index
console.log(fruits[3]); // This will produce an error
// To correct the error, check the index before accessing
var indexToAccess = 1;
if (indexToAccess >= 0 && indexToAccess < fruits.length) {
    console.log("Fruit at index ".concat(indexToAccess, ": ").concat(fruits[indexToAccess]));
}
else {
    console.log("Index ".concat(indexToAccess, " is out of range."));
}
