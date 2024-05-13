//Assignment#41
/*Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/


//making as array
let magician_names = ["Harry Potter", "Alice", "John"]

//making function

function show_magicians(magicians: string[]){
    magicians.forEach(names=>
        console.log(names)
    );
}

//calling the function

show_magicians(magician_names);