"use strict";
import { startGame, canvas, endGame} from "./canvas-script.js"; //endgame
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
let goHomeBtn = document.getElementById("goHomeBtn");

goHomeBtn.addEventListener("click", function () {
   location.reload();
  // canvas.style.display = "none";
  // endGameDiv.style.display = "none";
  // containerDiv.style.display = "flex";
  // clearInterval(ballRendering);
})

//  let gamerName = form.elements.gamerName.value;

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
