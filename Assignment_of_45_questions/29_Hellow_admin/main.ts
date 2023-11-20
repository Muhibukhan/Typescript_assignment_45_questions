// Array of usernames
let usernames: string[] = ['admin', 'Ibad', 'Arsalan', 'Saud', 'Ahsen'];

// Loop through the array and print greetings
for (const username of usernames) {
  if (username === 'admin') {
    console.log("Hellow admin, would you like to see a status report?");
  } else {
    console.log(`Hellow ${username}, thank you for logging in again.`);
  }
}
