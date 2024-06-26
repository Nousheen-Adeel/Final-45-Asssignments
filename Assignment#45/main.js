// // //Assignment#45
// // /*Cars: Write a function that stores information about a car in a Object.
// // The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// // Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// // Print the Object that’s returned to make sure all the information was stored correctly.*/
function car_info(manufacturer, model, ...options) {
    let make_car = {
        manufacturer,
        model,
    };
    options.forEach(([key, value]) => make_car[key] = value);
    return make_car;
}
console.log(car_info("Toyota", "Carolla", ["color", "silver"], ["year", 2022]));
console.log(car_info("Ford", "Fiesta", ["color", "navy blue"], ["sunroof", true]));
export {};
