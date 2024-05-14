//Assignment#42

/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
 Call show_magicians() to see that the list has actually been modified.*/

 //making as array


//making function

function show_magicians(magicians: string[]){
    magicians.forEach(names=>
        console.log(names)
    );
}

//making another function


function make_great(magicians: string[]){

   return magicians.map(names=> ("The Great " + names)
    );

}

let magician_names = ["Harry Potter", "Alice", "John"];

//calling the function

let great_magicians = make_great(magician_names);

//calling the function

show_magicians(great_magicians);

