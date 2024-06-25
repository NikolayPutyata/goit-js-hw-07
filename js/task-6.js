function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const input = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = "";
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = ""; // Очищає попередні елементи
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const newElement = document.createElement("div");
    newElement.style.width = `${30 + i * 10}px`;
    newElement.style.height = `${30 + i * 10}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    elements.push(newElement);
  }
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = ""; // Очищає вміст div#boxes
}
