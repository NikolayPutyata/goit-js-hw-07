const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerFunction);

function handlerFunction(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  }
  const userInformation = {
    email,
    password,
  };
  console.log(userInformation);
  form.reset();
}
