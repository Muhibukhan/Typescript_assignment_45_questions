
let dinnerGuests = ["Albert Einstein", "Nelson Mandela", "Marie Curie"];


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


let newGuest: string = "Leonardo da Vinci";
dinnerGuests.push(newGuest);


console.log("\nUpdated Guest List:");
for (let guest of dinnerGuests) {
  console.log(guest);
}


console.log("\nInvitations to the Updated Guest List:");
for (let guest of dinnerGuests) {
  console.log(`${invitationMessage}${guest},\n\nYou are cordially invited to dinner at my place. Please join us for an evening of great conversation and delicious food.\n\nSincerely,\n[Muhib]\n`);
}
