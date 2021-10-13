"use strict";
// // Declearing variables
// let resetBtn = document.querySelector(".again");
// let secretNum = document.querySelector(".number");
// let message = document.querySelector(".message");
// let checkBtn = document.querySelector(".check");
// let labelScore = document.querySelector(".score");
// let labelHighScore = document.querySelector(".highscore");

// let score = 20;
// labelScore.textContent = score;
// let highscore = 0;
// //generate random number between 1 to 20
// let randomNumber = Math.floor(Math.random() * 20) + 1;

// //guess the number
// checkBtn.addEventListener("click", function guessTheNumber() {
//   //get user guessing
//   let userGuess = document.querySelector(".guess").value;
//   if (!userGuess) return (message.textContent = "This can not be blank");
//   if (Number(userGuess) === randomNumber) {
//     if (score > highscore) {
//       highscore = score;
//       labelHighScore.textContent = highscore;
//     }
//     document.body.style.backgroundColor = "#60b347";
//     secretNum.textContent = randomNumber;
//     message.textContent = "🎉🎊🎉WoooHooo!🥳🎊🎉🎊";
//     document.querySelector("h1").textContent = "🎉🎊🎉WoooHooo!🥳🎊🎉🎊";
//   }
//   if (Number(userGuess) !== randomNumber) {
//     userGuess > randomNumber
//       ? (message.textContent = "😱Too High😱")
//       : (message.textContent = "😬Too Low😬");
//     score--;
//     labelScore.textContent = score;
//   }

//   if (score <= 0) {
//     document.querySelector("h1").textContent = "You Lose!";
//     message.textContent = "You Loose😂 Click Again button to re-start the game";
//     document.body.style.backgroundColor = "red";
//   }
// });

// resetBtn.addEventListener("click", () => {
//   randomNumber = Math.floor(Math.random() * 5) + 1;
//   score = 20;
//   labelScore.textContent = score;
//   document.body.style.backgroundColor = "#222";
//   const userGuess = (document.querySelector(".guess").value = "");
//   secretNum.textContent = "?";
//   message.textContent = "Start guessing...";
//   document.querySelector("h1").textContent = "Guess My Number!";
// });

//fetching dom elements

const restartGame = document.querySelector(".again");
const secretNum = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const currentScore = document.querySelector(".score");
const highestScore = document.querySelector(".highscore");
const confetti = document.querySelector(".confetti");

//Generate Random secrect number

let randSecretNum = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

currentScore.textContent = score;

checkBtn.addEventListener("click", () => {
  const userGussedNumber = document.querySelector(".guess");
  console.log(randSecretNum);
  if (!userGussedNumber.value)
    return (message.textContent = "Input can't be blank");
  if (Number(userGussedNumber.value) === randSecretNum) {
    if (highscore < score) {
      highscore = score;
      highestScore.textContent = highscore;
    }
    message.textContent = "🎉 Correct";
    document.body.style.backgroundColor = "#60b347";
    secretNum.textContent = randSecretNum;
    confetti.style.display = "block";
    document.querySelector("h1").textContent = "That's the WAY! to answer 👌";
  }
  if (Number(userGussedNumber.value) !== randSecretNum) {
    Number(userGussedNumber.value) > randSecretNum
      ? (message.textContent = "Too High😐")
      : (message.textContent = "Too Low😑");
    score--;
    currentScore.textContent = score;
  }
  userGussedNumber.value = "";
});

restartGame.addEventListener("click", () => {
  randSecretNum = Math.floor(Math.random() * 20) + 1;
  score = 20;
  currentScore.textContent = score;
  secretNum.textContent = "?";
  message.textContent = "Start guessing...";
  document.querySelector("h1").textContent = "Guess My Number!";
  document.body.style.backgroundColor = "#222";
  confetti.style.display = "none";
});
