/* Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.*/
var names = ["car", "bike", "aeroplane", "van"];
var message = "I would like to own a";
for (var i = 0; i < names.length; i++) {
    console.log(message, names[i]);
}
