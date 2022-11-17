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
  //print count down timer sign
  document.getElementById("countDown").style.display = "block";
  //document.getElementById("StopButton").style.display = "block";

  clockStart();
}

//hide "The game starts now"
document.getElementById("startMessage").style.display = "none";

//Hide the start button
document.getElementById("letBegin").style.display = "none";

//copyright notice
let date = new Date();
let year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;

//Hide the counting down timer function

document.getElementById("countDown").style.display = "none";
document.getElementById("StopButton").style.display = "none";

//clock-start function
function clockStart() {


  const startingMinutes = 10;
  let time = startingMinutes * 60; //all the seconds

  const countdownEL = document.getElementById('countDown');
  console.log('countDown');

  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const minutes = Math.floor(time / 60);


    let seconds = time % 60;

    //add 0 to number that less than 10 in front of them
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEL.innerHTML = `${minutes}:${seconds}`;

    time--;
  }
}
