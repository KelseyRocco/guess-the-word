//GLOBAL VARIABLES

const guessedLettersElement = document.querySelector(".guessed-letters");
const guessBtn = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining p");
const message = document.querySelector(".message");
const playAgainBtn = document.querySelector(".play-again hide");

const word = "Magnolia";
const guessedLetters = [];

//FUNCTIONS

const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Guess a letter";
  } else if (input.length > 1) {
    message.innerText = "Only one letter please";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Only letters from the alphabet accepted";
  } else {
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter. Try again.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};

//EVENT HANDLERS

guessBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";
  message.innerText = "";
  const playerGuess = validateInput(guess);
  makeGuess(guess);
});
