import { drawFood, updateFood } from './food.js';
import {SNAKE_SPEED, updateSnake, drawSnake, getSnakeHead, snakeIntersection} from './snake.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false; 
const gameContainer = document.getElementById('game-container');

function main(currentTime){
    if (gameOver) {
        if (confirm('GAME OVER!!! Press ok to restart.')) {
          window.location = '/'
        }
        return
      }

    window.requestAnimationFrame(main);
    const secsSinceLastLender = (currentTime - lastRenderTime) / 1000
    
    if(secsSinceLastLender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkGameOver();
}

function draw() {
    gameContainer.innerHTML = '';
    drawSnake(gameContainer);
    drawFood(gameContainer);
}

function checkGameOver() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  }