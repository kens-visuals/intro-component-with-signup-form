const form = document.querySelector('.intro__form');
const inputs = document.querySelectorAll('.intro__input');
const errorTexts = document.querySelectorAll('.intro__error');
const errorIcons = document.querySelectorAll('.intro__button-error-icon');
const [firstNameInput, lastNameInput, emailInput, passwordInput] = [...inputs];
const [firstNameError, lastNameError, emailError, passwordError] = [
  ...errorTexts,
];

const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;

const valiedateRegExp = (testInput, reg) => reg.test(testInput);
const findIconParent = (iconParent) =>
  [...errorIcons][[...inputs].indexOf(iconParent)];

const errorMessage = (attr) => `${attr.name} cannot be empty`;
const successMessage = function () {
  if (
    [...errorIcons].every((el) =>
      el.classList.contains('intro__button-error-icon--hidden')
    )
  )
    setTimeout(() => {
      [...inputs].map((el) => {
        el.value = '';
        el.style.outline = `none`;
      });
    }, 1000);
};

const setErrorState = function (inputProp, errorText, message) {
  findIconParent(inputProp).classList.remove(
    'intro__button-error-icon--hidden'
  );
  errorText.classList.remove('intro__error--hidden');
  inputProp.style.outline = '1px solid hsl(0, 100%, 74%)';
  errorText.innerHTML = message;
};

const setSuccessState = function (inputProp, errorText) {
  findIconParent(inputProp).classList.add('intro__button-error-icon--hidden');
  errorText.classList.add('intro__error--hidden');
  inputProp.style.outline = '1px solid hsl(154, 59%, 51%)';
  errorText.innerHTML = '';
};

const validateNameInput = function (inputProp, errorText) {
  inputProp.value == null || inputProp.value === ''
    ? setErrorState(inputProp, errorText, errorMessage(inputProp))
    : setSuccessState(inputProp, errorText);
};

const validateEmailInput = function () {
  if (emailInput.value == null || emailInput.value === '') {
    setErrorState(emailInput, emailError, errorMessage(emailInput));
  } else if (!valiedateRegExp(emailInput.value, emailRegExp)) {
    setErrorState(
      emailInput,
      emailError,
      `Please provide a valid ${emailInput.name.toLowerCase()} address`
    );
  } else if (!valiedateRegExp(emailInput.value, emailRegExp)) {
    setSuccessState(emailInput, emailError);
  }
};

const validatePasswordInput = function () {
  if (passwordInput.value == null || passwordInput.value === '') {
    setErrorState(passwordInput, passwordError, errorMessage(passwordInput));
  } else if (
    (!valiedateRegExp(passwordInput.value, passwordRegExp) &&
      !/[@$!%*?&]/g.test(passwordInput.value)) ||
    !/\d/g.test(passwordInput.value) ||
    passwordInput.value.length < 8
  ) {
    setErrorState(
      passwordInput,
      passwordError,
      `${passwordInput.name} must be minimum 8 character, include at least one number and one special character`
    );
  } else {
    setSuccessState(passwordInput, passwordError);
  }
};

const checkInputs = function () {
  validateNameInput(firstNameInput, firstNameError);
  validateNameInput(lastNameInput, lastNameError);
  validateEmailInput();
  validatePasswordInput();
};

window.onload = function () {
  [...inputs].map((el) => (el.value = ''));
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
  successMessage();
});
