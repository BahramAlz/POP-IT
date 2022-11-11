"use strict";
  
//gamer name submit form
let form = document.getElementById("gamerNameForm");
form.onsubmit = function (event) {
  event.preventDefault();
let name = form.elements.gamerName.value;

  // welcome message to the player
  document.getElementById("welcomeMsg").innerHTML =
    "Hello " + name + ", Good luck!";
  document.getElementById("name").style.display = "none";
  document.getElementById("letBegin").style.display = "block";
};

// start button
let button = document.getElementById("StartButton");
button.addEventListener("click", Start);
//the function 'Start' shows "the game starts now" on the screen for the time being
function Start() {
  //Hide the start button
  document.getElementById("letBegin").style.display = "none";
  // print "the game starts now"
  document.getElementById("startMessage").style.display = "block";
}

//hide "The game starts now"
document.getElementById("startMessage").style.display = "none";
//Hide the start button
document.getElementById("letBegin").style.display = "none";

//copyright notice
let date= new Date();
let year= date.getFullYear();
document.getElementById("currentYear").innerHTML=year;