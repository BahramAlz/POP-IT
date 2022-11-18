"use strict";



// start button
let button = document.getElementById("StartButton");
button.addEventListener("click", Start);


function clockStart() {


  const startingMinutes = 1;
  let time = startingMinutes * 60; //all the seconds

  const countdownEL = document.getElementById('countDownText');
  console.log('countDown');

  let myInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const minutes = Math.floor(time / 60);


    let seconds = time % 60;

    //add 0 to number that less than 10 in front of them
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEL.innerHTML = `${minutes}:${seconds}`;

    time--;
  }
}

function Start() {
  clockStart();
  Stop();
}


function Stop() {
  if (minutes < 0) {
    clearInterval(myInterval);
  }
}



