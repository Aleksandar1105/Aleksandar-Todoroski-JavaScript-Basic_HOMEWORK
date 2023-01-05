let regionEurope = 'Europe';
const BASE_URL = `https://restcountries.com/v3.1/region/${regionEurope}`;

// Selectors
const appContainer = document.querySelector('#app-container');
const letterInput = document.querySelector('#letter-input');
const userInput = document.querySelector('#user-input');
const paragraphChosenGategory = document.querySelector('#chosen-category');
const livesCount = document.querySelector('#lives-count');
let livesLeft = document.querySelector('.lives-left');
const playAgain = document.querySelector('#play-again');
const hintButton = document.querySelector('#hint-button');
const hintText = document.querySelector('#hint-text');
const canvas = document.getElementById("canvas");

// Counters
let countries = [];
let countLives = 6;
let winCount = 0;

// Function for fetching data from API
async function getEuropeCountries() {
  const response = await fetch(BASE_URL);
  const result = await response.json();
  return result;
}

// Function for importing the word from API
function generateWord() {
  const countryGeneratedFromApi = countries[Math.floor(Math.random() * countries.length)];
  const country = countryGeneratedFromApi.name.common;

  paragraphChosenGategory.innerHTML = `The Chosen Category is <b>${regionEurope.toUpperCase()}</b> Countries`;

  let chosenWord = userInput.innerText = `${country.toUpperCase()}`;
  let dashedWord = chosenWord.replace(/./g, '<span class="dashes">_</span>');
  userInput.innerHTML = dashedWord;

  // Hint button
  hintButton.addEventListener('click', function () {
    const capitalCity = countryGeneratedFromApi.capital;
    hintText.innerHTML = `The capital city is <span class="capital-city"><b>${capitalCity}</b></span>`;
  })

  return chosenWord;
}



// Function for rendering the letters for input
async function initializer() {

  countries = await getEuropeCountries();

  //Initially erase all content and hide letteres and new game button
  letterInput.innerHTML = '';
  userInput.innerHTML = '';
  hintText.innerHTML = 'Clue -';

  // generating letters from UTF 8
  for (let i = 97; i <= 122; i++) {
    let letter = String.fromCharCode(i);
    letterInput.innerHTML += `<button class="guess-letter">${letter.toUpperCase()}</button>`;
  }

  // for displaying empty dashes of generated word
  let generatedWord = generateWord();
  console.log(generatedWord);
  let letterArray = generatedWord.split('');
  console.log(letterArray);

  let dashedWord = generatedWord.replace(/./g, '<span class="dashes">_</span>');
  dashedWord = userInput.innerHTML;
  let dashes = document.getElementsByClassName('dashes');

  // for display the empty space on place of dashes where the word has empty space
  if (letterArray.includes(' ')) {
    letterArray.forEach(function (letter, index) {
      if (letter === ' ') {
        dashes[index].innerText = letter;
      }
    })
  }

  let buttons = document.querySelectorAll('.guess-letter');
  winCount = 0;
  countLives = livesLeft.innerText = 6

  // Event listeners on input buttons
  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();

      function livesCount() {
        // guessed letters
        if (letterArray.includes(button.innerText)) {
          letterArray.forEach(function (letter, index) {
            if (letter === button.innerText) {
              dashes[index].innerText = letter;
              // button.disabled = true;
              winCount += 1;
              let countNumber = letterArray.filter(letter => letter === ' ').length;
              if (winCount == letterArray.length - countNumber) {
                winGame();
              }
            }
          })
        }
        // wrong guesses
        if (!letterArray.includes(button.innerText)) {
          countLives -= 1;
          drawMan(countLives + 1);
          livesLeft.innerText = countLives;
          if (countLives == 0) {
            loseGame()
          }
        }
        button.disabled = true;
      }
      livesCount()
    })
  })
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
}

// Win game function
function winGame() {
  let buttons = document.querySelectorAll('.guess-letter');
  buttons.forEach(function (button) {
    button.disabled = true;
  })
  let chosenWord = userInput.innerText;
  userInput.innerHTML = `<p class="win-msg">YOU WON! THE COUNTRY NAME WAS ${chosenWord}!</p>`;
  playAgain.addEventListener('click', initializer)
}

// Lose game function
function loseGame() {
  let buttons = document.querySelectorAll('.guess-letter');
  buttons.forEach(function (button) {
    button.disabled = true;
  })
  userInput.innerHTML = '<p class="lose-msg">YOU LOSE! TRY AGAIN!</p>';
  playAgain.addEventListener('click', initializer)
}

const canvasCreator = function () {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = function () {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = function () {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = function () {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = function () {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = function () {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = function () {
    drawLine(70, 80, 90, 110);
  };

  // Initial frame
  const initialDrawing = function () {
    // clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    // bottom line
    drawLine(10, 130, 130, 130);
    // left line
    drawLine(10, 10, 10, 131);
    // top line
    drawLine(10, 10, 70, 10);
    // small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

// Draw the man
const drawMan = function (countLives) {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (countLives) {
    case 1:
      leftLeg();
      break;
    case 2:
      rightLeg();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      body();
      break;
    case 6:
      head();
      break;
    default:
      break;
  }
};

// START APPLICATION 
window.onload = initializer;
playAgain.addEventListener('click', initializer)