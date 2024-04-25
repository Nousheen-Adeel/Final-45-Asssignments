// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//
var personName = "NousHeeN fatImA";
// Person name in lower case//
console.log(personName.toLowerCase());
// Person name in upper case//
console.log(personName.toUpperCase());
//person name in titlecase//
var firstLetterOfFirstword = personName.charAt(0).toUpperCase();
var restLetterOfFirstword = personName.slice(1, 8).toLowerCase();
var firstLetterofSecondWord = personName.charAt(9).toUpperCase();
var restLetterOfSecondWord = personName.slice(10).toLowerCase();
var titlecase = firstLetterOfFirstword + restLetterOfFirstword + " " + firstLetterofSecondWord + restLetterOfSecondWord;
console.log(titlecase);
