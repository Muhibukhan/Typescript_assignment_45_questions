// Question 1: Guest List
let guestList: string[] = ["Ibad", "Saud", "Arsalan"];

function sendInvitation(name: string) {
  console.log(`Dear ${name}, you are cordially invited to dinner.`);
}

guestList.forEach(sendInvitation);

// Question 2: Changing Guest List
let unableToAttend = "Mr. Ali";
let newGuest = "Mrs. Ali";

console.log(`${unableToAttend} can't make it to the dinner.`);

let indexOfUnableToAttend = guestList.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
  guestList[indexOfUnableToAttend] = newGuest;
}

guestList.forEach(sendInvitation);

// Question 3: More Guests
console.log("We found a bigger dinner table!");

let newGuests: string[] = ["Umer", "Abdullah", "Zainab"];

guestList.unshift(...newGuests.slice(0, 1)); // Add to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, newGuests[1]); // Add to the middle
guestList.push(...newGuests.slice(2)); // Add to the end

guestList.forEach(sendInvitation);

// Question 4: Shrinking Guest List
console.log("Sorry, we can only invite two people for dinner.");

while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  if (removedGuest) {
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
  }
}

guestList.forEach(sendInvitation);

guestList.length = 2; // Remove the last two names

console.log("Final guest list:", guestList);

// Question 5: Seeing the World
let placesToVisit: string[] = ["Paris", "Tokyo", "Venice", "New York", "Rome"];

console.log("Original order:", placesToVisit.join(", "));

console.log("Alphabetical order:", [...placesToVisit].sort().join(", "));

console.log("Original order after sorting:", placesToVisit.join(", "));

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse().join(", "));

console.log("Original order after reverse sorting:", placesToVisit.join(", "));

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit.join(", "));

placesToVisit.reverse();
console.log("Original order after double reverse:", placesToVisit.join(", "));

placesToVisit.sort();
console.log("Sorted order:", placesToVisit.join(", "));

placesToVisit.sort((a, b) => b.localeCompare(a)); // Reverse alphabetical order
console.log("Reverse sorted order:", placesToVisit.join(", "));

// Dinner Guests
console.log(`Number of people invited to dinner: ${guestList.length}`);
