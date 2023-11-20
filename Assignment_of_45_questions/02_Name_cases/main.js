"use strict";
let personName = 'muhib khan';
let lowercaseName = personName.toLowerCase();
let uppercaseName = personName.toUpperCase();
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (text) => {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
}
let titleCaseName = toTitleCase(personName);
console.log(`Original Name: ${personName}`);
console.log(`Lowercase Name: ${lowercaseName}`);
console.log(`Uppercase Name: ${uppercaseName}`);
console.log(`Title Case Name: ${titleCaseName}`);
