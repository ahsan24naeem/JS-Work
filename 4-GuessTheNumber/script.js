const randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

//const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame) {
  submit.addEventListener('click', function (e) {
  
    console.log(randomNumber);
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(a) {
  if (a < 1 || isNaN(a) || a == null || a === '') {
    alert('Invalid Input');
  } 
  else if (numGuess === 10) {
    prevGuess.push(a);
    displayGuess(a);
    displayMessage(`Random Number = ${randomNumber}\n🥺`);
    endGame(a);
  } 
  else {
    displayGuess(a);
    prevGuess.push(a);
    checkGuess(a);
  }
}

function checkGuess(a) {
  if (a > randomNumber) {
    displayMessage('Too High');
  } else if (a < randomNumber) {
    displayMessage('Too Low');
  } else {
    displayMessage(`🥳 You Won! The number was ${randomNumber} 🥳`)
    endGame(a)
  }
}

function displayGuess(a) {
  userInput.value = '';
  guessSlot.innerHTML += `${a}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(a) {
  loOrHi.innerHTML = `<h2>${a}</h2>`;
}

function endGame(a) {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    playGame = false
    newGame(a)
}

function newGame(a) {
    let newButton = document.createElement('button')
    newButton.innerHTML = "NewGame"
    let temp = submit
    submit.replaceWith(newButton)
    newButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      submit.replaceWith(temp)
      //startOver.removeChild(newButton);
      playGame = true;
    });
}
