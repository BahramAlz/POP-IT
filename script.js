"use strict";
import { startGame} from "./canvas-script.js";

let startButton = document.getElementById("startButton");
let form = document.getElementById("gamerNameForm");

let name = form.elements.gamerName.value;

//gamer name submit form
form.onsubmit = function (event) {
  event.preventDefault();
  // welcome message to the player
  document.getElementById("welcomeMsg").innerHTML =
    "Hello " + name + ", Good luck!";
  document.getElementById("name").style.display = "none";
  document.getElementById("letBegin").style.display = "block";

  startButton.style.display = "block";
};

// start button
startButton.addEventListener("click", Start);
//the function 'Start' shows "the game starts now" on the screen for the time being
function Start() {
  //Hide the start button
  document.getElementById("container").style.display = "none";

  startGame();
}

//hide "The game starts now"
document.getElementById("startMessage").style.display = "none";
//Hide the start button
document.getElementById("letBegin").style.display = "none";

//copyright notice
let date= new Date();
let year= date.getFullYear();
document.getElementById("currentYear").innerHTML=year;