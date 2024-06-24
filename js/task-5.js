function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const textBcgColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", handlerFunction);

function handlerFunction() {
  const randomColor = getRandomHexColor();
  textBcgColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}
