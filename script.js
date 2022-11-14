"use strict";

//Main Logic for canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Color Palett
function randomColor(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

//URL: palettes.shecodes.io
let weirdColor1 = "#ff5d9e";
let weirdColor2 = "#8f71ff";
let weirdColor3 = "#82acff";
let weirdColor4 = "#8bffff";

const colors = [weirdColor1, weirdColor2, weirdColor3, weirdColor4];

//Ball Functionality
let ballArray = [];

function Ball() {
  this.x = Math.floor(Math.random() * window.innerWidth);
  this.y = Math.floor(window.innerHeight);
  this.size = Math.floor(Math.random() * 10 + 35);
  this.color = colors[randomColor(0, colors.length - 1)];
  
  /*
  URL: https://css-tricks.com/snippets/javascript/random-hex-color
  this.color = '#' + Math.floor(Math.random()16777215).toString(16); 
  */

  this.speedY = 10;
  this.speedX = Math.random((Math.random() - 0.5) * 4);

  this.update = () => {
    this.y -= this.speedY;
    this.x += this.speedX;
    this.speedY -= 0.1;
  };

  this.draw = () => {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
  };
}

function renderBalls() {
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].draw();
    ballArray[i].update();

    //Collission
    let distanceBetweenMouseAndBall = Math.hypot(
      mouseX - ballArray[i].x,
      mouseY - ballArray[i].y
    );

    if (distanceBetweenMouseAndBall - ballArray[i].size < 1) {
      ballArray.splice(i, 1);
      i--;
      return;
    }

    if (ballArray[i].y > window.innerHeight + 10) {
      ballArray.splice(i, 1);
      i--;
    }
  }
}

let numberOfBallsToRender = [1, 2, 3, 4];

//SetInterval to render the balls on an interval
const startRenderingBallsInterval = () => {
  let interval = setInterval(() => {
    const numberOfBalls = Math.round(
      Math.random() * numberOfBallsToRender.length
    );
    let indexOf = numberOfBallsToRender[numberOfBalls];

    for (let i = 0; i < indexOf; i++) {
      ballArray.push(new Ball());
    }
  }, 1000);
};

let animationId;

function animate() {
  context.fillStyle = `rgba(24, 28, 31, .5)`;
  context.fillRect(0, 0, canvas.width, canvas.height);
  renderBalls();
  animationId = requestAnimationFrame(animate);
}

//Collison / Mouse Coordinates & Behaviour

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

animate();
startRenderingBallsInterval();
