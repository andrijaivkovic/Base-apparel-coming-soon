const errorMessage = document.querySelector(".hero__form--error-message");
const errorIcon = document.querySelector(".hero__form--error-icon");
const emailForm = document.querySelector(".hero__form");
const emailFormInput = document.querySelector(".hero__form--input");
const emailFormButton = document.querySelector(".hero__form--button");

const showError = function () {
  if (emailFormInput.validity.valueMissing) {
    errorMessage.textContent = "You need to enter an e-mail address";
  }

  if (emailFormInput.validity.typeMismatch) {
    errorMessage.textContent = "Entered value needs to be an e-mail address";
  }

  if (emailFormInput.validity.tooShort) {
    errorMessage.textContent = `Entered e-mail must contain at least ${emailFormInput.minLength} chars.`;
  }

  errorMessage.className = "hero__form--error-message active";
  errorIcon.className = "hero__form--error-icon active";
};

emailFormInput.addEventListener("input", function () {
  if (this.validity.valid) {
    errorMessage.textContent = "";
    errorMessage.className = "hero__form--error-message";
    errorIcon.className = "hero__form--error-icon";
    return;
  }

  showError();
});

emailForm.addEventListener("submit", function (e) {
  emailFormInput.value = "";
  e.preventDefault();
  document.activeElement.blur();

  if (!emailFormInput.validity.valid) {
    showError();
    e.preventDefault();
  }
});
