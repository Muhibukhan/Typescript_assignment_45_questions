function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
    }
    ;
    console.log();
}
;
// Calling the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss");
orderSandwich(); // Empty sandwich
