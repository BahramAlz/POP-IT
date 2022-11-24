export let scoreContainer = document.getElementById("scoreContainer");

export let score = 0;

let scoreCounter = document.getElementById("scoreCounter");

export function addScore() { 
  // scoreCounter.innerHTML = " " + score++;
  scoreCounter.innerHTML = " " + (score++ + 1);
}

export function resetScore() {
  score = 0
  scoreCounter.innerHTML = " " + score; 
}

const hiscores = JSON.parse(localStorage.getItem("hiscores")) || []; // Has to be set outside of the function.

function nameStorage() {
  let newName = form.elements.gamerName.value; //from script.js?
  let newScore = Number(score.innerHTML);

  const scoreObj = {
    names: newName,
    scores: newScore,
  };

  hiscores.push(scoreObj);
  hiscores.sort((a, b) => b.scores - a.scores);
  hiscores.splice(5);
  localStorage.setItem("hiscores", JSON.stringify(hiscores));
}