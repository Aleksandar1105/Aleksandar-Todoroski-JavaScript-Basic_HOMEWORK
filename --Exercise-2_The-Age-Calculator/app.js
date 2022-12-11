//THE AGE CALCULATOR
/* Write a function named calculateAge that:
    -takes 2 arguments: birth year, current year.
    -calculates the age based on those years.
    -outputs the result to the screen like so: "You are NN years old"
    -Call the function three times with different sets of values.
    -Bonus: Figure out how to get the current year in JavaScript instead of passing it in. */

function calcucalteAge(currentYear, birthYear) {
    let myAge = currentYear - birthYear;
    return myAge;
}

let inputBirthYear = prompt('Please enter your birth year:');
let convertedBirthYear = Number(inputBirthYear);

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let result = calcucalteAge(currentYear, convertedBirthYear);
console.log(`You are ${result} years old!`)

// const birthYearAleksandar = 1985;
// const birthYearDragica = 1988;
// const birthYearLina = 2016;

// console.log(`You are ${calcucalteAge(currentYear, birthYearAleksandar)} years old!`);
// console.log(`Dragica is ${calcucalteAge(currentYear, birthYearDragica)} years old!`);
// console.log(`Lina is ${calcucalteAge(currentYear, birthYearLina)} years old!`);