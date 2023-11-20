
let dinnerGuests: string[] = [
  "John",
  "Eric",
  "Tom",
  "Mr.Steve",
  "Mr. Ali",
  "Arsalan"
];


let invitationMessage: string = "Dear ";


console.log("Original Guest List:");
for (let guest of dinnerGuests) {
  console.log(guest);
}


console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");


while (dinnerGuests.length > 2) {
    let guestToRemove: string = dinnerGuests.pop()!;
  console.log(`\nSorry, ${guestToRemove}, but we can't invite you to dinner this time.`);
}


console.log("\nInvited Guests:");
for (let guest of dinnerGuests) {
  console.log(guest);
}


dinnerGuests.pop();
dinnerGuests.pop();


// console.log("\nEmpty Guest List:");
console.log(dinnerGuests);
