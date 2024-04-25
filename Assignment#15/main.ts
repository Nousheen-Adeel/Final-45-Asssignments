//Assignment#15//

/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.*/

let guestsList:string[] =["Affan", "Maria", "Aiza"]

let absentguest= "Affan"

let newguest= "Adeel"

guestsList[0] = newguest

for (let i = 0; i < guestsList.length; i++ ){
    console.log("Hi dear,", guestsList[i] , "\n I would like to invite you to the dinner at my home on Sunaday.\n Thankyou")
}

console.log(`${absentguest} is not coming to the dinner on Sunday.`)

