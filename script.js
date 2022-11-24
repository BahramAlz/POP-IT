"use strict";
import { startGame, endGameDiv, stopGame } from "./canvas-script.js"; //endgame
import { resetTimer, countdownEL } from "./timer.js";
import { scoreContainer, resetScore } from "./score.js";

let startButton = document.getElementById("startButton");
let form = document.getElementById("gamerNameForm");
let welcomeMsg = document.getElementById("welcomeMsg");
let nameDiv = document.getElementById("nameDiv");
let startButtonDiv = document.getElementById("letBegin");
let containerDiv = document.getElementById("container");
let currentYear = document.getElementById("currentYear");
let footerContainer = document.getElementById("footerContainer");
let goHomeBtn = document.getElementById("goHomeBtn");
let retryBtn = document.getElementById("retryBtn");

goHomeBtn.addEventListener("click", function () {
  location.reload();
})

retryBtn.addEventListener("click", function () {
  stopGame()
  endGameDiv.style.display = "none";
  containerDiv.style.display = "flex";
  scoreContainer.style.display = "none";
  countdownEL.style.display = "none";
})

//  let gamerName = form.elements.gamerName.value;

export let gamerName = document.getElementById("myText");
// console.log(gamerName);

//gamer name submit form
form.onsubmit = function (event) {
  event.preventDefault();
  // welcome message to the player
  welcomeMsg.innerHTML = "Hello " + gamerName.value + ", Good luck!";
  nameDiv.style.display = "none";
  startButtonDiv.style.display = "block";
  startButton.style.display = "block";
  console.log(gamerName.value)
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
  startGame();
  resetScore()
  resetTimer()
}

//copyright notice
let date = new Date();
let year = date.getFullYear();
currentYear.innerHTML = year;
