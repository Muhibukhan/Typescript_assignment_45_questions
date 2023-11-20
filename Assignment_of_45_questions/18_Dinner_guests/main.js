var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 1: Guest List
var guestList = ["Ibad", "Saud", "Arsalan"];
function sendInvitation(name) {
    console.log("Dear ".concat(name, ", you are cordially invited to dinner."));
}
guestList.forEach(sendInvitation);
// Question 2: Changing Guest List
var unableToAttend = "Mr. Ali";
var newGuest = "Mrs. Ali";
console.log("".concat(unableToAttend, " can't make it to the dinner."));
var indexOfUnableToAttend = guestList.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guestList[indexOfUnableToAttend] = newGuest;
}
guestList.forEach(sendInvitation);
// Question 3: More Guests
console.log("We found a bigger dinner table!");
var newGuests = ["Umer", "Abdullah", "Zainab"];
guestList.unshift.apply(guestList, newGuests.slice(0, 1)); // Add to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, newGuests[1]); // Add to the middle
guestList.push.apply(// Add to the middle
guestList, newGuests.slice(2)); // Add to the end
guestList.forEach(sendInvitation);
// Question 4: Shrinking Guest List
console.log("Sorry, we can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
    }
}
guestList.forEach(sendInvitation);
guestList.length = 2; // Remove the last two names
console.log("Final guest list:", guestList);
// Question 5: Seeing the World
var placesToVisit = ["Paris", "Tokyo", "Venice", "New York", "Rome"];
console.log("Original order:", placesToVisit.join(", "));
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort().join(", "));
console.log("Original order after sorting:", placesToVisit.join(", "));
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse().join(", "));
console.log("Original order after reverse sorting:", placesToVisit.join(", "));
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit.join(", "));
placesToVisit.reverse();
console.log("Original order after double reverse:", placesToVisit.join(", "));
placesToVisit.sort();
console.log("Sorted order:", placesToVisit.join(", "));
placesToVisit.sort(function (a, b) { return b.localeCompare(a); }); // Reverse alphabetical order
console.log("Reverse sorted order:", placesToVisit.join(", "));
// Dinner Guests
console.log("Number of people invited to dinner: ".concat(guestList.length));
