let personName: string = 'muhib khan';

let lowercaseName: string = personName.toLowerCase();
let uppercaseName: string = personName.toUpperCase();

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (text) => {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
}

let titleCaseName: string = toTitleCase(personName);

console.log(`Original Name: ${personName}`);
console.log(`Lowercase Name: ${lowercaseName}`);
console.log(`Uppercase Name: ${uppercaseName}`);
console.log(`Title Case Name: ${titleCaseName}`);
