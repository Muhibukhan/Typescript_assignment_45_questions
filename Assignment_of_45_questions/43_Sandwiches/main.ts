function orderSandwich(...items: string[]): void {
  console.log("Sandwich Order Summary:");
  if (items.length === 0) {
    console.log("You ordered an empty sandwich. Please add some items.");
  } 
  else {
    console.log("You ordered a sandwich with the following items:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
  };
  console.log();
};

// Calling the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss");
orderSandwich(); // Empty sandwich
