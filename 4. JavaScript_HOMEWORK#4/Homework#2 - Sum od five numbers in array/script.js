// HOMEWORK#2 (Arrays and Loops)

/* Write a function that will take an array of 5 numbers as an argument and return the sum.
 - Print it in the console or in alert */

// function sumNumbers(array) {
//     let sum = 0;
//     for (i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number') {
//             sum += array[i];
//         } else {
//             return 'You have entered an invalid input!'
//         }
//     }
//     return sum;
// }

function sumNumbers(array) {
    let sum = 0;
    for (let num of array) {
        if (typeof num === 'number') {
            sum += num;
        } else {
            return 'You have entered an invalid input!'
        }
    }
    return sum;
}

let myArrayOfFive = [1, 6, 12, 21, 5];

console.log(`The sum of the numbers in array is: ${sumNumbers(myArrayOfFive)}`);
alert(`The sum of the numbers in array is: ${sumNumbers(myArrayOfFive)}`);

console.log('====================================================================');

/* - BONUS: Write another function called validateNumber()
   that checks if a number is a valid number and call it for every number.
   If one of the numbers of the array is invalid show an error message instead of a result. */

function validateNumber(array) {
    let newArray = [];
    for (let number of array) {
        if (typeof number === 'number') {
            newArray.push(number);
        } else {
            return 'Error! The input is not a number!!!';
        }
    }
    return newArray;
}

console.log('Validated array of numbers is:', validateNumber(myArrayOfFive));
