/* Write a JavaScript program to convert a length given in feet to meters.
TIP: 1 feet = 0.3048 meters */

const conversionRate = 0.3048;

const inputLength = prompt('Enter the distance:');
const convertedLength = parseFloat(inputLength);

const feetToMeters = convertedLength * conversionRate;
const metersToFeet = convertedLength / conversionRate;

console.log('Converted length from feet to meters is:', feetToMeters);
console.log('Converted length from meters to feet is:', metersToFeet);
