//****************** HOMEWORK PART 1 ******************

/*  Write a JavaScript function which accepts a parameter and returns its type
    and prints it in the console. 
    Try to call the functions 5 times for 5 different types:
    -object
    -boolean
    -number
    -string
    -undefined */
console.log('****************** HOMEWORK PART 1 ******************');

function whichType(value) {
    let typeOfValue = typeof value;
    console.log(`The type of the entered value is ${typeOfValue}`);
    return typeOfValue;
}

whichType({});//returns object
whichType(true);//returns boolean
whichType(23);//returns number
whichType('string');//returns string
whichType();//returns undefined


//****************** HOMEWORK PART 2 ******************

/*  Write a JavaScript function that will return:
-Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
-Note: Call the function in console to see answer
-Bonus: Make the same function work for converting dog to human years as well */
console.log('****************** HOMEWORK PART 2 ******************');

//dog to human years converter
function dogToHuman(dogYears) {
    if (isNaN(dogYears) || !dogYears || dogYears <= 0) {
        console.log('You have entered an invalid input. Try again with numbers!');
        return;
    }
    let humanYear = dogYears * 7;
    console.log(`Humans age converted from dogs age is ${humanYear}`);
    return humanYear;
}

let inputDogYears = dogToHuman(prompt(`Please enter dogs age:`));
let convertedDogYears = parseInt(inputDogYears);


//human to dog converter
function humanToDog(humanYears) {
    if (isNaN(humanYears) || !humanYears || humanYears <= 0) {
        console.log('You have entered an invalid input. Try again with numbers!');
        return;
    }
    let dogYear = humanYears / 7;
    console.log(`Dogs age converted from human age is ${dogYear}`);
    return dogYear;
}

let inputHumanYears = humanToDog(prompt(`Please enter humans age:`));
let convertedHumanYears = parseInt(inputHumanYears);


//****************** HOMEWORK PART 3 ******************

/*  Write a javascript function for an ATM:
-The ATM should give cash 
-Should return "Not enough money" if you request more money
-Should return the amount withdrawn and money left on the account if you have enough
-Note: Hardcode your account money in the program
-Bonus: Make it work with prompt()! */
console.log('****************** HOMEWORK PART 3 ******************');

const myMoneyAmount = 50000;

const requestedMoney = moneyAmount(prompt('Please enter the amount you want to withrdaw:'));
const convertedRequestedMoney = parseInt(requestedMoney);

function moneyAmount(money) {
    if (money > myMoneyAmount) {
        console.log('Not enough money!');
        return false;
    }
    if (isNaN(money) || !money) {
        console.log('Invalid input! Your input must contain only numbers!');
        return false;
    }

    console.log(`You have withdrown $${money}`);

    let amountLeft = myMoneyAmount - money;
    console.log(`The amount of money left on your account is $${amountLeft}`);
    return money;
}

