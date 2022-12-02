import { endGame } from "./canvas-script.js";

export let countdownEL = document.getElementById("countDownText");
let starting_minute = 1;
let starting_second = 0;
let total_seconds = starting_minute * 60 + starting_second;
let clock;

function clockStart() {
  total_seconds > 0 ? total_seconds-- : countDone();

  let display_minute = Math.floor(total_seconds / 60);
  let display_second = total_seconds - display_minute * 60;
  let countdown = "0" + display_minute + ":";
  countdown =
    countdown + (display_second < 10 ? "0" + display_second : display_second);
  countdownEL.innerHTML = countdown;

  if (display_second <= 10) countdownEL.style.color = "red";
}

export function timerStart() {
  clock = setInterval(() => clockStart(), 1000);
}

//Count finish function
export function countDone() {
  clearInterval(clock);
  endGame();
}
