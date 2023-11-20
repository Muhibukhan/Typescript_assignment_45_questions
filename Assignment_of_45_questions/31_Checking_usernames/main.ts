let currentUsers: string[] = ['John', 'Alice', 'Bob', 'Eve', 'Charlie'];


let newUsers: string[] = ['Bob', 'Mia', 'Ella', 'EVE', 'Oliver'];


for (let newUser of newUsers) {
 
    let usernameExists = currentUsers.some(
    (currentUsername) => currentUsername.toLowerCase() === newUser.toLowerCase()
  );

  if (usernameExists) {
    console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different username.`);
  } else {
    console.log(`Congratulations! The username '${newUser}' is available.`);
  }
};
