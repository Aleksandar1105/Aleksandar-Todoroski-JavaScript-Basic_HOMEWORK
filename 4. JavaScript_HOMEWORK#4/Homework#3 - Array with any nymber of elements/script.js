// HOMEWORK#3 (Arrays and Loops)

/* Write a javascript function that:
 - When given any array of strings (should work with array with any number of elements)
 - It will create one big string and return it
 - Ex:["Hello", "there", "students", "of", "SEDC", "!"]
 - Result: "Hello there students of SEDC!" */

function bigString(array) {

    let arrayToBigString = [];

    for (let item of array) {
        if (typeof item === 'string') {
            arrayToBigString.push(item);
        }
    }
    return arrayToBigString.join(' ');
}


let myString = ['Hello', 'there', '.', 'This', 'is', 'one', 'big', 'string', 'made', 'from', 'an', 'array', 'of', 'strings', '.'];
console.log(bigString(myString));