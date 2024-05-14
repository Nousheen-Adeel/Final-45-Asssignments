//Assignment#43

/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names 
and one array with the Great added to each magician’s name.*/

//making as array
let magician_names = ["Harry Potter", "Alice", "John"]

//making function

function show_magicians(magicians: string[]){
    magicians.forEach(names=>
        console.log(names)
    );
}

//making another function


function make_great(magicians: string[]){

   return magicians.map(names=>
        console.log("The Great " + names)
    );

}

//calling the function

make_great(magician_names);