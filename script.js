"use strict";
import { startGame, endGame } from "./canvas-script.js";
import { timerStart, countdownEL } from "./timer.js";
import { scoreContainer, score } from "./score.js";

let startButton = document.getElementById("startButton");
let form = document.getElementById("gamerNameForm");
let welcomeMsg = document.getElementById("welcomeMsg");
let nameDiv = document.getElementById("nameDiv");
let startButtonDiv = document.getElementById("letBegin");
let containerDiv = document.getElementById("container");
let currentYear = document.getElementById("currentYear");
let footer=document.getElementById("footer-container");

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
//the function 'Start':the game begins
function Start() {
  //Hide the start button
  footer.style.display="none";
  containerDiv.style.display = "none";
  countdownEL.style.display = "block";
  scoreContainer.style.display = "block";
  timerStart();
  startGame();
  score;
}

//copyright notice
let date = new Date();
let year = date.getFullYear();
currentYear.innerHTML = year;
