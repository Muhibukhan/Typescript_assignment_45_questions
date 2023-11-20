var dinnerGuests = [
    "John",
    "Eric",
    "Tom",
    "Mr.Steve",
    "Mr. Ali",
    "Arsalan"
];
var invitationMessage = "Dear ";
console.log("Original Guest List:");
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log(guest);
}
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
while (dinnerGuests.length > 2) {
    var guestToRemove = dinnerGuests.pop();
    console.log("\nSorry, ".concat(guestToRemove, ", but we can't invite you to dinner this time."));
}
console.log("\nInvited Guests:");
for (var _a = 0, dinnerGuests_2 = dinnerGuests; _a < dinnerGuests_2.length; _a++) {
    var guest = dinnerGuests_2[_a];
    console.log(guest);
}
dinnerGuests.pop();
dinnerGuests.pop();
// console.log("\nEmpty Guest List:");
console.log(dinnerGuests);
