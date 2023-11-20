var currentUsers = ['John', 'Alice', 'Bob', 'Eve', 'Charlie'];
// Make a list of new usernames
var newUsers = ['Bob', 'Mia', 'Ella', 'EVE', 'Oliver'];
var _loop_1 = function (newUser) {
    // Check if the new username (case-insensitive) exists in current usernames
    var usernameExists = currentUsers.some(function (currentUsername) { return currentUsername.toLowerCase() === newUser.toLowerCase(); });
    if (usernameExists) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("Congratulations! The username '".concat(newUser, "' is available."));
    }
};
// Loop through the new_users list to check username availability
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
