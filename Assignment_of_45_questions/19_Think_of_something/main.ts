// Create an array of mountain names
let mountains: string[] = [
  "Mount Everest",
  "K2",
  "River Indus",
  "River Ganges",
  "Denali",
  "Gorakh Hills"
];

// Print the list of mountain names
console.log("List of Mountains & Rivers:");
mountains.forEach((mountain, index) => {
  console.log(`${index + 1}. ${mountain}`);
});
