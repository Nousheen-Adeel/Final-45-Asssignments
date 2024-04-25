//Assignment#17

/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

//starting with Assignment#16 

let guestsList:string[] =["Nousheen", "Maria", "Aiza"]

let absentguest= "Nousheen"

let newguest= "Muhammed Affan"

guestsList[0] = newguest


//adding a guest in beginning using unshift

guestsList.unshift("Adeel");

//adding a guest in middle using splice

guestsList.splice(2,0,"Mushtaq");

//adding a guest in end using push

guestsList.push("Murad");

//removing 4 guests using while loop

console.log("Sorry, we are not able to arrange a bigger table so only two guests are invited");

while(guestsList.length> 2){
    let removeguests= guestsList.pop();
    console.log("Sorry " + removeguests + "\n we can't invite you to the dinner due to space issue so may be next time.");
}

//iniviting still rest of 2 
for (let i = 0; i < guestsList.length; i++ ){
    console.log("Hi dear,", guestsList[i] , "\n You are still to the dinner at my home on Sunaday.\n Thankyou")
}

//now removing rest of 2 guests as well

guestsList.splice(0,2);

//printing empty array

console.log(guestsList);

