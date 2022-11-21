"use strict";

const countdownEL = document.getElementById("countDownText");
let start = document.getElementById("StartButton");
let pause = document.getElementById("PauseButton");
let reset = document.getElementById("ResetButton");
let starting_minute = 1;
let starting_second = 0;
let total_seconds = starting_minute * 60 + starting_second;
let starting_time = total_seconds;
let clickable = true;
start.addEventListener("click", Start);
pause.addEventListener("click", Pause);
reset.addEventListener("click", Reset);

function clockStart() {
  total_seconds > 0 ? total_seconds-- : countDone();

  let display_minute = Math.floor(total_seconds / 60);
  let display_second = total_seconds - display_minute * 60;
  let countdown = '0' + display_minute + ':';
  countdown = countdown + (display_second < 10 ? '0' + display_second : display_second);
  countdownEL.innerHTML = countdown;
}

let clock;

function Start() {
  if (clickable) {
    clock = setInterval(() => clockStart(), 1000);
    //prevent multiple clicks
    clickable = false;
  }
}
//pause the timer
function Pause() {
  clearInterval(clock);
  //prevent multiple clicks
  clickable = true;
}
//reset the timer
function Reset() {
  //prevent multiple clicks
  clickable = true;
  total_seconds = starting_time + 1;
  clockStart();
}

//Count finish function
function countDone() {
  clearInterval(clock);
  // do thing when count done!
  console.log('Count Finished!');

}


