"use strict";
//Assignment#16
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
//starting with Assignment#15
let guestsList = ["Nousheen", "Maria", "Aiza"];
let absentguest = "Nousheen";
let newguest = "Muhammed Affan";
guestsList[0] = newguest;
console.log("***Good news, We found a bigger table so we are inviting 3 more guests***");
//adding a guest in beginning using unshift
guestsList.unshift("Adeel");
//adding a guest in middle using splice
guestsList.splice(2, 0, "Mushtaq");
//adding a guest in end using push
guestsList.push("Murad");
for (let i = 0; i < guestsList.length; i++) {
    console.log("Hi dear,", guestsList[i], "\n I would like to invite you to the dinner at my home on Sunaday.\n Thankyou");
}
