/* Write a JavaScript program that will calculate area of Circle
TIP: area = π * r2 */

const PI = Math.PI;

const radius = parseFloat(prompt('Enter the radius:'));
const squaredRadius = Math.pow(radius, 2);

const circleArea = squaredRadius * PI;

console.log('The area of circle is:', circleArea)