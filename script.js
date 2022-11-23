"use strict";
import { startGame } from "./canvas-script.js";
import { timerStart, countdownEL } from "./timer.js";
import { scoreContainer, score } from "./score.js";

let startButton = document.getElementById("startButton");
let form = document.getElementById("gamerNameForm");
let welcomeMsg = document.getElementById("welcomeMsg");
let nameDiv = document.getElementById("nameDiv");
let startButtonDiv = document.getElementById("letBegin");
let containerDiv = document.getElementById("container");
let currentYear = document.getElementById("currentYear");
let footerContainer = document.getElementById("footerContainer");
export let endGameDiv = document.getElementById("endGameDiv");
let endGameButton = document.getElementById("endGameButton");

let gamerName = form.elements.gamerName.value;

//gamer name submit form
form.onsubmit = function (event) {
  event.preventDefault();
  // welcome message to the player
  welcomeMsg.innerHTML = "Hello " + gamerName + ", Good luck!";
  nameDiv.style.display = "none";
  startButtonDiv.style.display = "block";
  startButton.style.display = "block";
};

// start button
startButton.addEventListener("click", Start);
//the function 'Start' shows "the game starts now" on the screen for the time being
function Start() {
  //Hide the start button
  containerDiv.style.display = "none";
  countdownEL.style.display = "block";
  scoreContainer.style.display = "block";
  footerContainer.style.display = "none";
  timerStart();
  startGame();
  score;
}

//copyright notice
let date = new Date();
let year = date.getFullYear();
currentYear.innerHTML = year;

// //Return HOME BUTTON
// endGameButton.addEventListener("click", () => {
//   endGameDiv.style.display = "none";
//   containerDiv.style.display = "flex";
// });

//Restart Button (Return HOME BUTTON)
let refreshPage = () => {
  location.reload();
}

endGameButton.addEventListener('click', refreshPage);