"use strict";
//Create a for loop to print numbers from 1 to 5. Use the range function to generate the numbers.
function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}
//example usage:
const numbers = range(1, 5);
for (const number of numbers) {
    console.log(number);
}
