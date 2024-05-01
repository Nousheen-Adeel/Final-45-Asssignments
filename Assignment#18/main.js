"use strict";
//Assignment#18
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
//Making as array
let places = ["Karachi", "Islamabad", "Peshwawer", "Multan", "Hyderabad"];
//printing an array
console.log("Original order:", places);
//printing in alphabetical order
console.log("Alphabetical Order:", [...places].sort());
//printing in again in its original order
console.log("Original order:", places);
//printing in reverse alphabetical order
console.log("Reverse Alphabetical order:", [...places].sort().reverse());
//printing in again in its original order   
console.log("Original order:", places);
//reversing the order of the array
console.log("Reversed Array:", places.reverse());
//printing the array again in its original order
console.log("Original Order:", places.reverse());
//printing the array in alphabetical order
console.log("Alphabetical Order:", places.sort());
//Printing the array in reverse alphabetical order
console.log("Reverse Alphabetical Order:", places.sort().reverse());
