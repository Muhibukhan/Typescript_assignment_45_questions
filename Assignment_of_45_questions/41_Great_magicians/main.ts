function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
};

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];

  for (const magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }

  return greatMagicians;
};

const magicianNames = ["Magician1", "Magician2", "Magician3", "Magician4"];

const greatMagicians = make_great(magicianNames);
show_magicians(greatMagicians);
