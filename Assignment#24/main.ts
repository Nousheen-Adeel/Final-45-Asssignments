//Assignment#24

/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

// First we do Tests for equality

console.log("Equality Test:", ("Nousheen" as string === "Nousheen"));

console.log("Equality Test:", ("Nousheen" as string === "Maria"));

//Inequality Case

console.log("Inequality Test:", ("Nousheen" as string!== "Nousheen"));

console.log("Inequality Test:", ("Nousheen" as string!== "Maria"));

//Tests using the lower case function

console.log("Lower Case Test:", ("NOUSHEEN" as string).toLowerCase() === "nousheen"); //true

console.log("Lower Case Test:", ("NOUSHEEN" as string).toLowerCase() === "NOUSHEEN"); //false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("Equalitiy Test:", 10 === 10); //true

console.log("Equalitiy Test:", 10 as number === 11); //false

console.log("Inequality Test:", 10 as number !== 9); //true

console.log("Inequality Test:", 10 as number!== 10); //false

console.log("Greater than Test:" , 10 > 5) //true

console.log("Greater than Test:" , 10 > 10) //false

console.log("Less than Test:" , 5 < 15) //true

console.log("Less than Test:" , 15 < 10) //false

console.log("Greater than or equal to Test:" , 10 >= 10) //true

console.log("Greater than or equal to Test:" , 10 >= 11) //false

console.log("Less than or equal to Test:" , 10 <= 10) //true

console.log("Less than or equal to Test:" , 10 <= 9) //false

// Tests using "and" and "or" operators

console.log("And Test:" , 10 > 5 && 10 < 15) //true

console.log("And Test:" , 10 > 15 && 10 < 15) //false

console.log("Or Test:" , 10 > 5 || 10 < 15) //true

console.log("Or Test:" , 10 > 15 || 10 < 15) //false

// Test whether an item is in a array

let names = ["Nousheen", "Maria", "Aiza"];

console.log("In Array Test:", names.includes("Aiza")) //true

console.log("In Array Test:", names.includes("Hira")) //false

// Test whether an item is not in a array

console.log("Not In Array Test:", !names.includes("Hira")); //true

console.log("Not In Array Test:", !names.includes("Maria")) //false

















