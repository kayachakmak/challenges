console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

let output = document.querySelector('[data-js="output"]');

let pizzaSize1 = pizzaInput1.value;
let pizzaSize2 = pizzaInput2.value;
calculatePizzaGain(pizzaSize1, pizzaSize2);

pizzaInput1.addEventListener("input", () => {
  // write your code here
  pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = 0.25 * Math.PI * diameter1 ** 2;
  const area2 = 0.25 * Math.PI * diameter2 ** 2;
  textContent = ((area2 - area1) / area1) * 100;
  output.innerHTML = Math.round(textContent);
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  let neWsizePx = (newSize * 100) / 24 + "px";
  pizzaElement.style.width = neWsizePx;
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2){
  if (size1<size2){
    outputSection.style.backgroundColor = var(--red);
  }else{
    outputSection.style.backgroundColor = var(--green);
  }
}
