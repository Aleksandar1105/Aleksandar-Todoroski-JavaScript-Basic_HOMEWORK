// Change the page with JavaScript

/* Change the text of all paragraphs and headers with javascript
Note:The html must not be changed */

let firstParagraph = document.querySelector('.paragraph');
firstParagraph.innerText = 'This is new text in the first paragraph';

let secondParagraph = document.querySelector('.second');
secondParagraph.innerText = 'This is new text in the second paragraph';

let firstHeaderOne = document.getElementById('myTitle');
firstHeaderOne.innerHTML = `This is First Header One!`;

let thirdDiv = document.getElementsByTagName('div')[0];
let secondHeaderOne = thirdDiv.firstChild;
secondHeaderOne.innerText = 'This was the most dificult to change :)'

let headerThree = document.querySelector('h3');
headerThree.innerText = 'This is Header Three!'



