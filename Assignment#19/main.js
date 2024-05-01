"use strict";
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner.*/
//Assignment#14
let guestsList = ["Affan", "Maria", "Aiza"];
//for (let i=0; i < guestsList.length; i++){
//console.log("Hi dear,", guestsList[i] ," I would like to invite you to dinner at my home on Sunaday. Thankyou")
//}
//Assignment#15//
//let guestsList:string[] =["Affan", "Maria", "Aiza"]
let absentguest = "Affan";
let newguest = "Adeel";
guestsList[0] = newguest;
//for (let i = 0; i < guestsList.length; i++ ){
//  console.log("Hi dear,", guestsList[i] , "\n I would like to invite you to the dinner at my home on Sunaday.\n Thankyou")
//}
//console.log(`${absentguest} is not coming to the dinner on Sunday.`)
//Assignment#16//
//let guestsList:string[] =["Nousheen", "Maria", "Aiza"]
//let absentguest= "Nousheen"
//let newguest= "Muhammed Affan"
//guestsList[0] = newguest
//console.log ("***Good news, We found a bigger table so we are inviting 3 more guests***");
//adding a guest in beginning using unshift
guestsList.unshift("Adeel");
//adding a guest in middle using splice
guestsList.splice(2, 0, "Mushtaq");
//adding a guest in end using push
guestsList.push("Murad");
//for (let i = 0; i < guestsList.length; i++ ){
//  console.log("Hi dear,", guestsList[i] , "\n I would like to invite you to the dinner at my home on Sunaday.\n Thankyou")
//}
//Assignment#17//
//let guestsList:string[] =["Nousheen", "Maria", "Aiza"]
//let absentguest= "Nousheen"
//let newguest= "Muhammed Affan"
guestsList[0] = newguest;
//adding a guest in beginning using unshift
guestsList.unshift("Adeel");
//adding a guest in middle using splice
guestsList.splice(2, 0, "Mushtaq");
//adding a guest in end using push
guestsList.push("Murad");
//removing 4 guests using while loop
//console.log("Sorry, we are not able to arrange a bigger table so only two guests are invited");
while (guestsList.length > 2) {
    let removeguests = guestsList.pop();
    //console.log("Sorry " + removeguests + "\n we can't invite you to the dinner due to space issue so may be next time.");
}
//iniviting still rest of 2 
//for (let i = 0; i < guestsList.length; i++ ){
//  console.log("Hi dear,", guestsList[i] , "\n You are still to the dinner at my home on Sunaday.\n Thankyou")
//}
//now removing rest of 2 guests as well
guestsList.splice(0, 2);
//printing empty array
//console.log(guestsList);
//Assignment#18//
let places = ["Karachi", "Islamabad", "Peshwawer", "Multan", "Hyderabad"];
//printing an array
//console.log("Original order:", places);
//printing in alphabetical order
//onsole.log("Alphabetical Order:",[...places].sort());
//printing in again in its original order
//console.log("Original order:", places);
//printing in reverse alphabetical order
//console.log("Reverse Alphabetical order:",[...places].sort().reverse());
//printing in again in its original order   
//console.log("Original order:", places);
//reversing the order of the array
//console.log("Reversed Array:", places.reverse());
//printing the array again in its original order
//console.log("Original Order:", places.reverse());
//printing the array in alphabetical order
//console.log("Alphabetical Order:",places.sort());
//Printing the array in reverse alphabetical order
//console.log("Reverse Alphabetical Order:",places.sort().reverse());
//COMMENTING ALL UNNECESARY CODE FROM ASSIGNMENT14-18
//NOW WE NEED TO PRINT A MESSAGE ABOUT NUMBER OF PEOPLE WE ARE INVITING IN THE END
//for Assignment#19
console.log("Number of people in invited for dinner at the end:", guestsList.length);
