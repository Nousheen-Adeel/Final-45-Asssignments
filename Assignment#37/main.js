"use strict";
//Assignment#37
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
//Making a function
function make_shirt(size = "Large", message = "I love Typescript") {
    console.log(`\nThe size of the shirt is ${size} and there is a print ${message} on it`);
}
// as the function has default values as large and a message I LOVE TYPESCRIPT so we simply call the function for large size
make_shirt();
//for medium size we will change size parameter and for message it will take the default value
make_shirt("Medium");
//for small size we will change size and message both parameters
make_shirt("Small", "I LOVE GIAIC");
