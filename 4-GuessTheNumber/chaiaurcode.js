const randomNumber = parseInt(Math.floor(Math.random() * 100));

const userInput = document.body.querySelector('#guessField');
const submit = document.body.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loOrHi = document.querySelector('lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('submit', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(a) {
  if (a < 1 || isNaN(a) || a == null || a === '') {
    alert('Invalid Input');
  } else if (numGuess === 11) {
    displayGuess(a);
    displayMessage(`Random Number = ${randomNumber}\nGame Over`);
    endGame();
  } else {
    displayGuess(a);
    checkGuess(a);
    prevGuess.push(a);
  }
}

function checkGuess(a) {
  if (a > randomNumber) {
    displayMessage('Too High');
  } else if (a < randomNumber) {
    displayMessage('Too Low');
  } else {
    displayMessage('Correct');
  }
}

function displayGuess(a) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(a) {
  loOrHi.innerHTML = `<h2>${a}</h2>`;
}

function endGame(a) {}

function newGame(a) {}
