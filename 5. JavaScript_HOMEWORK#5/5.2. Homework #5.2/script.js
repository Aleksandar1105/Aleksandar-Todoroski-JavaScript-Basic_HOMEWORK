// Print all numbers from an array and the sum

/* Create an array with numbers
 - Print all numbers from the array in a list element, in a new HTML page
 - Print out the sum of all of the numbers below the list
 - Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11) */

let numArray = [3, 8, 6, 12, 5];

function printNumbers(array) {
    let myList = document.getElementById('myList');
    myList.innerHTML = '';
    myList.innerHTML = '<h2>These are the numbers:</h2>'
    let sum = 0;
    let allNums = [];
    for (let i = 0; i < array.length; i++) {
        myList.innerHTML += `<li>Number ${i + 1} is: <b>${array[i]}</b></li>`;
        sum += array[i];
        allNums.push(array[i]);
    }
    myList.innerHTML += `<h3>The sum of all numbers in the array is: ${allNums.join('+')} = ${sum}</h3>`;

}

printNumbers(numArray);