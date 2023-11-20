// Array of usernames
var usernames = ['admin', 'Ibad', 'Arsalan', 'Saud', 'Ahsen'];
// Loop through the array and print greetings
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'admin') {
        console.log("Hellow admin, would you like to see a status report?");
    }
    else {
        console.log("Hellow ".concat(username, ", thank you for logging in again."));
    }
}
