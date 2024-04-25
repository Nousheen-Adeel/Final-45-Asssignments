// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//

let personName :string = "NousHeeN fatImA"

// Person name in lower case//
console.log(personName.toLowerCase());

// Person name in upper case//
console.log(personName.toUpperCase());

//person name in titlecase//
let firstLetterOfFirstword:string = personName.charAt(0).toUpperCase();
let restLetterOfFirstword:string = personName.slice(1,8).toLowerCase();
let firstLetterofSecondWord:string = personName.charAt(9).toUpperCase();
let restLetterOfSecondWord:string = personName.slice(10).toLowerCase();

let titlecase:string = firstLetterOfFirstword + restLetterOfFirstword + " " + firstLetterofSecondWord + restLetterOfSecondWord
console.log(titlecase);
