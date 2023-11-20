
let dinnerGuests = ["Albert Einstein", "Nelson Mandela", "Muhd. Ali"];


let invitationMessage: string = "Dear ";


console.log("Original Guest List:");
for (let guest of dinnerGuests) {
  console.log(guest);
}


let guestToRemove: string = "Nelson Mandela";


let indexOfGuestToRemove: number = dinnerGuests.indexOf(guestToRemove);
if (indexOfGuestToRemove !== -1) {
  console.log(`\nUnfortunately, ${guestToRemove} can't make it to the dinner.`);
  dinnerGuests.splice(indexOfGuestToRemove, 1);
}


let newGuest: string = "Mr. Ahmed";
dinnerGuests.push(newGuest);


console.log("\nUpdated Guest List:");
for (let guest of dinnerGuests) {
  console.log(guest);
}


console.log("\nGreat news! We've found a bigger dinner table.");


let newGuests = ["Mr. ALi", "Mrs. Ali"];
dinnerGuests = [newGuests[0], ...dinnerGuests.slice(0, Math.floor(dinnerGuests.length / 2)), newGuests[1], ...dinnerGuests.slice(Math.floor(dinnerGuests.length / 2)), ...newGuests.slice(2)];


console.log("\nFinal Guest List:");
for (let guest of dinnerGuests) {
  console.log(guest);
}


console.log("\nInvitations to the Updated Guest List:");
for (let guest of dinnerGuests) {
  console.log(`${invitationMessage}${guest},\n\nYou are cordially invited to dinner at my place. Please join us for an evening of great conversation and delicious food.\n\nSincerely,\n[Muhib Ullah Khan]\n`);
};
