let maximumNumber = parseInt(prompt("Enter the maximum numbere!!"));

while (!maximumNumber) {
    maximumNumber = parseInt(prompt("Enter a valid Number!!"));
}

const tragetNumber = Math.floor(Math.random() * maximumNumber) + 1;

let guess = parseInt(prompt("Enter a valid Number!!"));