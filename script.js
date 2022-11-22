import { alertTimerEl, alertTimer } from "./alertTimer.js";

alertTimerEl.style.display = "none";
function Start() {
  //Hide the start button
  containerDiv.style.display = "none";

  alertTimer();
  //Rest elements will appear after a 3 seconds countdown.
  setTimeout(() => {
    countdownEL.style.display = "block";
    scoreContainer.style.display = "block";
    alertTimerEl.style.display = "none"
    timerStart();
    startGame();
    score;
  }, 3555
  )

}
