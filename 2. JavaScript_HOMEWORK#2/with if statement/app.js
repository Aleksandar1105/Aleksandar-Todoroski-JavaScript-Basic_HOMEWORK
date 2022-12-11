const year = prompt('Please enter your birth year:');
const parsedYear = parseInt(year);

const zodiacCalculation = (parsedYear - 4) % 12;

if (zodiacCalculation === 0) {
    console.log('Rat');
} else if (zodiacCalculation === 1) {
    console.log('Ox');
} else if (zodiacCalculation === 2) {
    console.log('Tiger');
} else if (zodiacCalculation === 3) {
    console.log('Rabbit');
} else if (zodiacCalculation === 4) {
    console.log('Dragon');
} else if (zodiacCalculation === 5) {
    console.log('Snake');
} else if (zodiacCalculation === 6) {
    console.log('Horse');
} else if (zodiacCalculation === 7) {
    console.log('Goat');
} else if (zodiacCalculation === 8) {
    console.log('Monkey');
} else if (zodiacCalculation === 9) {
    console.log('Rooster');
} else if (zodiacCalculation === 10) {
    console.log('Dog');
} else if (zodiacCalculation === 11) {
    console.log('Pig');
} else {
    console.log(`You've entered an invalid input! \nYour input must contain only whole numbers!`);
}

