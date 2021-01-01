import { expandSnake, onSnake } from "./snake.js";
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()

const EXPANSION_RATE = 1

export function updateFood() {
    if (onSnake(food)) {
      expandSnake(EXPANSION_RATE)
      food = getRandomFoodPosition()
    }
  }

export function drawFood(gameContainer) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameContainer.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
  }
