"use strict";
//Assignment#43
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names
and one array with the Great added to each magician’s name.*/
//making as array
let magician_names = ["Harry Potter", "Alice", "John"];
//making function
function show_magicians(magicians) {
    magicians.forEach(names => console.log(names));
}
//making another function
function make_great(magicians) {
    return magicians.map(names => ("The Great " + names));
}
let copy_of_magician_names = magician_names.slice();
let copy_of_great_magicians = make_great(copy_of_magician_names);
//original array
show_magicians(magician_names);
//new array
show_magicians(copy_of_great_magicians);
