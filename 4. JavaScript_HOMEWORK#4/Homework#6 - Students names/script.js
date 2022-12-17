// HOMEWORK#6 (Looping structures)

/* Write a javascript function that:
 - When given 2 arrays of students firstNames and lastNames will return
   a new array with students full names
 - Every name should have a numeric value before it
 - Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
 - Result: full = ["1. Bob Gregory", "2. Jill Wurtz"] */

let firstNamesArray = ['Aleksandar', 'Dejan', 'Zorica', 'Katarina', 'Miroslav', 'Dragica'];
let lastNamesArray = ['Todoroski', 'Kosteski', 'Kalevska', 'Stankovic', 'Stojanoski', 'Todoroska'];

function fullNames(firstNames, lastNames) {
  let fullNames = [];
  for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`)
  }

  return fullNames;
}

console.log('The list of full names from given arrays is:', fullNames(firstNamesArray, lastNamesArray));