// FIND NUMBERS IN ARRAY

/* How many times is a number contained in an array
-Write a function named findNumber that:
-Takes 2 arguments: number, array
-Calculates how many times the number is contained in an array with numbers
-Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
-Call the function three times with different arrays. */

const numArray = [3, 5, 8, 3, 6, 11, 35, 34, 22, 11, 4, 2, 3];

function findNumber(number, array) {
    let countNumber = 0;

    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            countNumber++;
        }
    }
    return countNumber;
}

const inputNumber = prompt('Please enter number:');
const convertedNumber = Number(inputNumber);

console.log(`There is ${findNumber(convertedNumber, numArray)} occurrences of ${convertedNumber} in the array`);

