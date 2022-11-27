/** @format */

"use strict";
import { startGame } from "./canvas-script.js";
import { timerStart, countdownEL } from "./timer.js";
import { scoreContainer, score } from "./score.js";

const startButton = document.getElementById("startButton");
const form = document.getElementById("gamerNameForm");
const welcomeMsg = document.getElementById("welcomeMsg");
const nameDiv = document.getElementById("nameDiv");
const startButtonDiv = document.getElementById("letBegin");
const containerDiv = document.getElementById("container");
const currentYear = document.getElementById("currentYear");
const footerContainer = document.getElementById("footerContainer");

export let endGameDiv = document.getElementById("endGameDiv");
const goHomeBtn = document.getElementById("goHomeBtn");
goHomeBtn.addEventListener("click", function () {
  location.reload();
});

export let gamerName = document.getElementById("myText");

//gamer name submit form
form.onsubmit = function (event) {
  event.preventDefault();
  // welcome message to the player
  welcomeMsg.innerHTML = "Hello " + gamerName.value + ", Good luck!";
  nameDiv.style.display = "none";
  startButtonDiv.style.display = "block";
  startButton.style.display = "block";
};

// start button
startButton.addEventListener("click", Start);
//the function 'Start':the game begins
function Start() {
  //Hide the start button
  footer.style.display = "none";
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
