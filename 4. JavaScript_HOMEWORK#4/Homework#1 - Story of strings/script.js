// HOMEWORK#1 (Arrays and Loops)

/* Create a function called tellStory()
 - The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
 - The function should return one big string with a story made from the arguments
 - Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
 - The value that is returned from the function should be printed in the console or in alert */

function tellStory(array) {
    return `My name is ${array[0]}. Today i feel ${array[1]} because I am ${array[2]} the basics of JavaScript.`;
}

let arrayOfThreeStrings = ['Aleksandar', 'awesome', 'learning']
alert(tellStory(arrayOfThreeStrings));
console.log(tellStory(arrayOfThreeStrings));