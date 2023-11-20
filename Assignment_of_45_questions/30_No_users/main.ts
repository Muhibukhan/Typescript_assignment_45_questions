// Array of usernames
let usernames: string[] = [];

// Check if the list of users is not empty
if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  // Variable to represent the person's age
  const age: number = 25; // You can change the age here

  // Determine the person's stage of life based on age
  if (age < 2) {
    console.log("The person is a baby.");
  } else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
  } else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
  } else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
  } else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
  } else {
    console.log("The person is an elder.");
  }
}
