//Write a JavaScript program that will read in a number and write out its digits

function writeDigitsOfNumber(number) {

    let newArray = [];

    for (let i = 0; i < number.length; i++) {
        newArray.push(number[i]);
    }
    return newArray;
}

let inputNumber = writeDigitsOfNumber(prompt('Enter number:'));
alert(`Digits from the numbe of input are: ${inputNumber} `);

console.log(inputNumber)

