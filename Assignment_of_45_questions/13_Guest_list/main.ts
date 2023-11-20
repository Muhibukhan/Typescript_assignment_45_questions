
const dinnerGuests = ["Ibad", "Arsalan", "Zainab", "Fahad"];


const invitationMessage: string = "Dear ";


for (let guest of dinnerGuests) {
  console.log(`${invitationMessage}${guest},\n\nYou are cordially invited to dinner at my place. Please join us for an evening of great conversation and delicious food.\n\nSincerely,\n[Muhib Khan]\n`);
}
