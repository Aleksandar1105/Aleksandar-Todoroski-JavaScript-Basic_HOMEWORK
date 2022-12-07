/* Write a JavaScript program that will calculate the price of 30 
Phones, where the price of one phone is $119.95 and the tax rate is 5%. */

const phonePrice = 139.95;
const taxRate = 0.05;
const phoneTotalPrice = phonePrice + phonePrice * taxRate;

const numberOfPhones = prompt('Please enter the number of phones:');
const convertedNumberOfPhones = parseFloat(numberOfPhones);

console.log(`Total price for your input is: $`, convertedNumberOfPhones * phoneTotalPrice);