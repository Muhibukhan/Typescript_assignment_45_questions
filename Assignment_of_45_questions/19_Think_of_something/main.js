// Create an array of mountain names
var mountains = [
    "Mount Everest",
    "K2",
    "River Indus",
    "River Ganges",
    "Denali",
    "Gorakh Hills"
];
// Print the list of mountain names
console.log("List of Mountains & Rivers:");
mountains.forEach(function (mountain, index) {
    console.log("".concat(index + 1, ". ").concat(mountain));
});
