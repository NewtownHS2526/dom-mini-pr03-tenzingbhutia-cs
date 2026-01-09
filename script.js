console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;



// Query selectors for all buttons and scooters go here
const pepperoniButton = document.querySelector("#pepperoni-button");
const veggieButton = document.querySelector("#veggie-button");
const bbqButton = document.querySelector("#bbq-button");

const pepperoniScooter = document.querySelector("#pepperoni-scooter");
const veggieScooter = document.querySelector("#veggie-scooter");
const bbqScooter = document.querySelector("#bbq-scooter");

const winnerText = document.querySelector("#winner");



// Write the function that moves the pepperoni scooter forward
// Increase the pepperoni position
// Call the helper function to update the scooter position
// Call the winner check function
const movePepperoni = () => {
  pepperoni_step += 1;
  shift(pepperoniScooter, pepperoni_step);
  checkWinner(pepperoni_step, "Pepperoni");
};



// Write the function that moves the veggie scooter forward
const moveVeggie = () => {
  veggie_step += 1;
  shift(veggieScooter, veggie_step);
  checkWinner(veggie_step, "Veggie");
};



// Write the function that moves the bbq scooter forward
const moveBBQ = () => {
  bbq_step += 1;
  shift(bbqScooter, bbq_step);
  checkWinner(bbq_step, "BBQ");
};



// Write a function that checks if a scooter reached column 7
// If so, display the winner message
// Disable all buttons when a winner is found
const checkWinner = (step, type) => {
  if (step === 7) {
    winnerText.innerHTML = `${type} pizza delivered first! 🍕`;
    pepperoniButton.disabled = true;
    veggieButton.disabled = true;
    bbqButton.disabled = true;
  }
};



// Add event listeners for each button
// Each button should trigger its own movement function
pepperoniButton.addEventListener("click", movePepperoni);
veggieButton.addEventListener("click", moveVeggie);
bbqButton.addEventListener("click", moveBBQ);
