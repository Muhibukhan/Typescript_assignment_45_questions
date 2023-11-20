// Create an array of Mountain objects
var mountains = [
    {
        name: "Mount Everest",
        height: 8848,
        location: "Nepal"
    },
    {
        name: "K2",
        height: 8611,
        location: "Pakistan"
    },
    {
        name: "Matterhorn",
        height: 4478,
        location: "Switzerland"
    },
    {
        name: "Kilimanjaro",
        height: 5895,
        location: "Tanzania"
    },
    {
        name: "Denali",
        height: 6190,
        location: "USA"
    },
    {
        name: "Mont Blanc",
        height: 4810,
        location: "France"
    }
];
// Print information about each mountain
console.log("List of Mountains:");
mountains.forEach(function (mountain, index) {
    console.log("".concat(index + 1, ". Name: ").concat(mountain.name));
    console.log("   Height: ".concat(mountain.height, " meters"));
    console.log("   Location: ".concat(mountain.location));
    console.log();
});
