const playButton = document.getElementById("playButton");
const startMenu = document.getElementById("startMenu");

playButton.addEventListener("click", () => {
  startMenu.style.display = "none";
  animate();
});

//Main Logic for canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ballArray = [];

function Ball() {
  this.x = Math.floor(Math.random() * window.innerWidth);
  this.y = Math.floor(window.innerHeight);
  this.size = Math.floor(Math.random() * 10 + 35);
  this.color = `hs1(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

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
    context.stroke();
  };
}

function renderBalls() {
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].draw();
    ballArray[i].update();
    if (ballArray[i].y > window.innerHeight + 10) {
      ballArray.splice(i, 1);
      i--;
    }
  }
}

let animationId;

function animate() {
  context.fillStyle = "rgba(24, 28, 31, .5)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  renderBalls();
  animationId = requestAnimationFrame(animate);
}

ballArray.push(new Ball());
