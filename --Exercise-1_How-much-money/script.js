alert('Please enter the amount of money you have...');

const inputMoney = prompt('How much money do you have?');
const convertedInputMoney = Number(inputMoney);

if (Number.isNaN(convertedInputMoney) || !convertedInputMoney) {
    // console.log(isNaN(convertedInputMoney));
    console.log('You have entered unvalid input. Please try again!')
} else if (convertedInputMoney > 0 && convertedInputMoney <= 50) {
    console.log(`You don't have enough money...`);
} else if (convertedInputMoney > 50 && convertedInputMoney <= 100) {
    console.log('You have enough money to buy a drink!');
} else if (convertedInputMoney > 100 && convertedInputMoney <= 1000) {
    console.log('You have enough money for lunch!');
} else if (convertedInputMoney > 1000 && convertedInputMoney <= 5000) {
    console.log('You have enough money for a trip to Ohrid!');
} else if (convertedInputMoney > 5000 && convertedInputMoney <= 10000) {
    console.log('You have enough money for a new phone!');
} else if (convertedInputMoney > 10000 && convertedInputMoney <= 25000) {
    console.log('You have enough money for a new laptop!');
} else if (convertedInputMoney > 25000 && convertedInputMoney <= 100000) {
    console.log('You have enough money for a new laptop!');
} else {
    console.log('You have money to buy a car');
}
