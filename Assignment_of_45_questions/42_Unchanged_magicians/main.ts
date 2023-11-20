function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];

  for (const magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }

  return greatMagicians;
}

const magicianNames: string[] = ["Magician1", "Magician2", "Magician3", "Magician4"];

// Create a new array with "the Great" added to each magician's name
const greatMagicians = make_great([...magicianNames]);

// Print both the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
