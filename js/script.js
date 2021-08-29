const form = document.querySelector(".cta-email-form");
const errorIcon = document.querySelector(".error-icon");
const emailInput = document.querySelector("#email-input");
const errorMessage = document.querySelector(".error-message");
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const eventHandler = (event) => {
  event.preventDefault();
  const value = event.target[0].value;
  if (!emailRegex.test(value)) {
    emailInput.classList.add("active");
    errorIcon.classList.remove("invisible");
    errorMessage.classList.remove("invisible");
  } else {
    emailInput.classList.remove("active");
    errorIcon.classList.add("invisible");
    errorMessage.classList.add("invisible");
  }
};
form.addEventListener("submit", eventHandler);
