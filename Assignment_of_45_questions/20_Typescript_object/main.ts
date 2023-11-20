// Define an interface for Mountain objects
interface Mountain {
    name: string;
    height: number;
    location: string;
  }
  
  // Create an array of Mountain objects
  let mountains: Mountain[] = [
    {
      name: "Mount Everest",
      height: 8848,
      location: "Nepal"
    },
    {
      name: "K2",
      height: 8611,
      location: "Pakistan"
    },
    {
      name: "Matterhorn",
      height: 4478,
      location: "Switzerland"
    },
    {
      name: "Kilimanjaro",
      height: 5895,
      location: "Tanzania"
    },
    {
      name: "Denali",
      height: 6190,
      location: "USA"
    },
    {
      name: "Mont Blanc",
      height: 4810,
      location: "France"
    }
  ];
  
  // Print information about each mountain
  console.log("List of Mountains:");
  mountains.forEach((mountain, index) => {
    console.log(`${index + 1}. Name: ${mountain.name}`);
    console.log(`   Height: ${mountain.height} meters`);
    console.log(`   Location: ${mountain.location}`);
    console.log();
  });
  