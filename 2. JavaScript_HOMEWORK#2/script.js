alert('Please enter the amount of money you have...');

const inputMoney = Number(prompt('How much money do you have?'));

if (Number.isNaN(inputMoney) && !inputMoney) {
    console.log(isNaN(inputMoney));
    console.log('You have entered unvalid input. Please try again!')
} else if (inputMoney > 0 && inputMoney <= 50) {
    console.log(`You don't have enough money...`);
} else if (inputMoney > 50 && inputMoney <= 100) {
    console.log('You have enough money to buy a drink!');
} else if (inputMoney > 100 && inputMoney <= 500) {
    console.log('You have enough money for lunch!');
} else if (inputMoney > 500 && inputMoney <= 1000) {
    console.log('You have enough money for a trip to Ohrid!');
} else if (inputMoney > 100 && inputMoney <= 5000) {
    console.log('You have enough money for a new phone!');
} else if (inputMoney > 5000 && inputMoney <= 10000) {
    console.log('You have enough money for a new laptop!');
} else {
    console.log(`You have money to buy a new car`);
}