const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "" || event.currentTarget.value === " ") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value.trim();
  }
});
