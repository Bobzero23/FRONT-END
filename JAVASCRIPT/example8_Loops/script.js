//Example on how to use a for..of loo
const people = ["Bob", "zero", "oma", "papa", "amda", "Roja", "Raja", "Jay"];

for (person of people) {
    // console.log(person);
}


//Example on how to iterate the object

let grades = {
    Bob: 100,
    zero: 100,
    oma: 80,
    papa: 75,
    amda: 85,
    Roja: 90,
    Raja: 95,
    Jay: 70
}

//How to use for..in Loop
//This will give us only keys 
for (key in grades) {
    // console.log(key);
}


//And this is how we get the values and keys
for (key in grades) {
    // console.log(`${key} ${grades[key]}`)
}


//There is also another way using Object.values / Object.keys ->
//  this one creates an array of either values or keys

