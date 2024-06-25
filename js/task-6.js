function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const input = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");

input.addEventListener("input", (event) => {
  if (event.currentTarget.value >= 1 && event.currentTarget.value <= 100) {
    const userNumber = event.currentTarget.value;
    console.log(userNumber);
  }
  
});

btnCreate.addEventListener("click", createBoxes());
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {}
function destroyBoxes() {}
