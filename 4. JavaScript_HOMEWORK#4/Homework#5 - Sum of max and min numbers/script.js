// HOMEWORK#5 (Looping structures)

/* Write a JavaScript function that will return:
 - The sum of the MAX and MIN numbers from an array with numbers
 - Ex: arr = [3, 5, 6, 8, 11]
 - Output: Max: 11, Min: 3, Sum: 14

 - Bonus: Try making the function work if there are other types of items in it */

let numArray = ['7', '5', '6', 12, 11, 4, 23];

function sumOfMinAndMax(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number' || isNaN(array[i])) {
            newArray.splice(i, 1);
        } else {
            newArray.push(array[i]);
        }
    }
    // console.log(newArray);

    let numMax = newArray[0];
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] > numMax) {
            numMax = newArray[i];
        }
    }
    console.log(`The MAX number in the array is ${numMax}`);

    let numMin = newArray[0];
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] < numMin) {
            numMin = newArray[i];
        }
    }
    console.log(`The MIN number in the array is ${numMin}`);

    let sum = numMax + numMin;
    return sum;
}

console.log(`The sum of MAX and MIN numbers from an array is ${sumOfMinAndMax(numArray)}`);