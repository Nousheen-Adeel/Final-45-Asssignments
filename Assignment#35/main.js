"use strict";
//Assignment#35
/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!*/
let animal_names = ["Cat", "Dog", "Goat"];
for (let i = 0; i < animal_names.length; i++) {
    console.log(animal_names[i]);
}
for (let j of animal_names) {
    console.log(j, "is a cute and loving animal.");
}
console.log("\nAny of these", animal_names[0], ",", animal_names[1], "and", animal_names[2], "would be a great pet.");
