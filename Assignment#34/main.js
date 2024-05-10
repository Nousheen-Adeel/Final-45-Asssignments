"use strict";
//Assignment #34
/*Pizzas: Think of at least three kinds of your favorite pizza.
Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
let pizza_names = ["Cheese", "Fajita", "Chicken Tandori"];
for (let i = 0; i < pizza_names.length; i++) {
    console.log(pizza_names[i], " Pizza");
}
//printing a message with each pizza
for (let i = 0; i < pizza_names.length; i++) {
    console.log(`I like ${pizza_names[i]} Pizza.`);
}
console.log("\nI am very fond of Pizza. I like the usual Pizza not the thin crust one, cheese flavoured pizza is my favourite. I only dislike the pepperorni one.I love Pizza!");
