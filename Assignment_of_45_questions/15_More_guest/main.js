var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var dinnerGuests = ["Albert Einstein", "Nelson Mandela", "Muhd. Ali"];
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
var newGuest = "Mr. Ahmed";
dinnerGuests.push(newGuest);
console.log("\nUpdated Guest List:");
for (var _a = 0, dinnerGuests_2 = dinnerGuests; _a < dinnerGuests_2.length; _a++) {
    var guest = dinnerGuests_2[_a];
    console.log(guest);
}
console.log("\nGreat news! We've found a bigger dinner table.");
var newGuests = ["Mr. ALi", "Mrs. Ali"];
dinnerGuests = __spreadArray(__spreadArray(__spreadArray(__spreadArray([newGuests[0]], dinnerGuests.slice(0, Math.floor(dinnerGuests.length / 2)), true), [newGuests[1]], false), dinnerGuests.slice(Math.floor(dinnerGuests.length / 2)), true), newGuests.slice(2), true);
console.log("\nFinal Guest List:");
for (var _b = 0, dinnerGuests_3 = dinnerGuests; _b < dinnerGuests_3.length; _b++) {
    var guest = dinnerGuests_3[_b];
    console.log(guest);
}
console.log("\nInvitations to the Updated Guest List:");
for (var _c = 0, dinnerGuests_4 = dinnerGuests; _c < dinnerGuests_4.length; _c++) {
    var guest = dinnerGuests_4[_c];
    console.log("".concat(invitationMessage).concat(guest, ",\n\nYou are cordially invited to dinner at my place. Please join us for an evening of great conversation and delicious food.\n\nSincerely,\n[Muhib Ullah Khan]\n"));
}
;
