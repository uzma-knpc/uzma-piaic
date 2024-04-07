// q13:Your Own Array: Think of your favorite mode of transportation,
// Define an array of cars
const cars1: string[] = ['Alsvin', 'Honda', 'Toyota', 'Tucsan', 'Vesel'];
let messag13="i would like to own car of"
// Iterate through the array and log statements
cars1.forEach(brand => {
    console.log(`I would like to own a ${brand} car.`);
});
console.log("**print by for command**")
for (var i=0; i<cars1.length; i++)
    {
        console.log("&&by variable message&&",messag13,cars1[i])
        console.log("&&by typing message&&","i would like to own my",cars1[i] ,"car")
    }