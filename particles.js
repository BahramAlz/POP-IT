//Importing context
import { context } from "./canvas-script.js";

export let ballParticlesArray = [];

//Ball Particles Class
export function BallParticles(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = Math.floor(Math.random() * 3 + 8);
    this.color = color;
  
    this.speedY = Math.random() * 2 - 2;
    this.speedX = Math.round((Math.random() - 0.5) * 10);
  
    //Updating Ball Particle
    this.update = () => {
      //Decrease size if this.size is greater then .2
      if (this.size > 0.2) {
        this.size -= 0.1;
      }
      this.y += this.speedY;
      this.x += this.speedX;
    };
  
    //Rendering or Drawing Ball on the canvas
    this.draw = () => {
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      context.fill();
    };
  }


export function renderBallParticles() {
    for (let i = 0; i < ballParticlesArray.length; i++) {
      ballParticlesArray[i].draw();
      ballParticlesArray[i].update();
  
      //If ball particles size is too small splice from the array
      if (ballParticlesArray[i].size <= 0.2) {
        ballParticlesArray.splice(i, 1);
        i--;
      }
    }
  }