//this is how you create a function expression 
const add = function (x, y) {
    return x + y;
}

/**This is how you create an arrow function */
const square = (x) => {
    return x ** 2
}

/**This is how you create a map function */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplyByTen = numbers.map(function (number) {
    return number * 10;
});

/**This is how you create a filter function */
const greaterThanFive = numbers.filter((number) => number > 5);

/**this is how you can use reduce function*/
const numSum = numbers.reduce((total, curr) => {
    return total + curr;
});