"use strict";


// FIREBASE (DATABASE NAME+SCORE STORAGE)

const firebaseConfig = {
  apiKey: "AIzaSyAbVO-rVsWIxdvAAotKjZ4fkiXMYneeGzo",
  authDomain: "pop-it-57db8.firebaseapp.com",
  projectId: "pop-it-57db8",
  storageBucket: "pop-it-57db8.appspot.com",
  messagingSenderId: "466842860574",
  appId: "1:466842860574:web:7b47ad936113f39236c20f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// Importing Ball Explosions
import {
  ballParticlesArray,
  BallParticles,
  renderBallParticles,
} from "./particles.js";

import { addScore, score } from "./score.js";
import { gamerName } from "./script.js";



export let endGameDiv = document.getElementById("endGameDiv");
let endGameText = document.getElementById("endGameText");
let endGameName = document.getElementById("endGameName");

let top5Container = document.getElementById("top5-container");


// async function getPosts(){       <--- this goes back 
//   const posts = await db.collection("posts").orderBy("score", "desc").limit(5).get();   
//   renderPosts(posts.docs);
// }
// db.collection("posts").orderBy("score", "desc").limit(5).onSnapshot(function (snapshot) {
//   renderPosts(snapshot.docs)
// });

// getPosts(); <-- this goes back

//Main Logic for canvas
export const canvas = document.getElementById("canvas");
export const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Color Palett
function randomColor(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

//URL: palettes.shecodes.io
let pink = "#ff5d9e";
let purple = "#8f71ff";
let lightblue = "#82acff";
let cyan = "#8bffff";

const colors = [pink, purple, lightblue, cyan];

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
      addScore();

      //The amount of Ball Particles
      for (let index = 0; index < 8; index++) {
        ballParticlesArray.push(
          new BallParticles(ballArray[i].x, ballArray[i].y, ballArray[i].color)
        );
      }

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
// export let ballRendering;
//SetInterval to render the balls on an interval
const startRenderingBallsInterval = () => {
  setInterval(() => {
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
  renderBallParticles();
  animationId = requestAnimationFrame(animate);
}

//Collison / Mouse Coordinates & Behaviour

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

//START GAME FUNCTION
export function startGame() {
  animate();
  startRenderingBallsInterval();
  canvas.style.display = "block";
}

// END GAME FUNCTION
export async function endGame() {
  cancelAnimationFrame(animationId);


  endGameDiv.style.display = "flex"; /// ändrad
  endGameText.innerHTML = "Score: " + score;
  endGameName.innerHTML = "Name: " + gamerName.value;

  await db.collection("posts").add({
    name: gamerName.value,
    score: score
});
db.collection("posts").orderBy("score", "desc").limit(5).onSnapshot(function (snapshot) {
  renderPosts(snapshot.docs)
});
// renderPosts(posts);
}

function renderPosts(posts) {
  // postsEl.innerHTML = "";

  for (let post of posts) {
      const data = post.data();

      const postEl = document.createElement("p");
      postEl.innerHTML = ` <br>
      ${data.name}: <span style="color:red;">
      ${data.score} </span>`;
      top5Container.append(postEl); /// 
  }

}
