var dinnerGuests = ["Albert Einstein", "Nelson Mandela", "Marie Curie"];
var invitationMessage = "Dear ";
console.log("Original Guest List:");
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log(guest);
}
var guestToRemove = "Nelson Mandela";
var indexOfGuestToRemove = dinnerGuests.indexOf(guestToRemove);
if (indexOfGuestToRemove !== -1) {
    console.log("\nUnfortunately, ".concat(guestToRemove, " can't make it to the dinner."));
    dinnerGuests.splice(indexOfGuestToRemove, 1);
}
var newGuest = "Leonardo da Vinci";
dinnerGuests.push(newGuest);
console.log("\nUpdated Guest List:");
for (var _a = 0, dinnerGuests_2 = dinnerGuests; _a < dinnerGuests_2.length; _a++) {
    var guest = dinnerGuests_2[_a];
    console.log(guest);
}
console.log("\nInvitations to the Updated Guest List:");
for (var _b = 0, dinnerGuests_3 = dinnerGuests; _b < dinnerGuests_3.length; _b++) {
    var guest = dinnerGuests_3[_b];
    console.log("".concat(invitationMessage).concat(guest, ",\n\nYou are cordially invited to dinner at my place. Please join us for an evening of great conversation and delicious food.\n\nSincerely,\n[Muhib]\n"));
}
