
import { isInputEmpty, isBetween, isValidEmail, isEmailRegistered, passwordSecure } from "./utils.js";
//Captación de form e inputs
const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name-input");
const surnameInput = document.getElementById("surname-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

//Lista de usuarios
const users = JSON.parse(localStorage.getItem('users')) || [];


// Feedbacks
// Feedback de error
const showError = (input, message) => {
  //accedo al contenedor del input
  const formField = input.parentElement;
  //si tiene clase success la remuevo
  formField.classList.remove("success");
  //le agrego clase de error
  formField.classList.add("error");
  //capto el small y lo muestro con el mensaje
  const errorMessage = formField.querySelector("small");
  errorMessage.style.display = "inline-block";
  errorMessage.textContent = message;
};
// Feedback de success
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const errorMessage = formField.querySelector("small");
  errorMessage.style.display = "none";
  errorMessage.textContent = "";
};
// Validador de input para Nombre y Apellido (si está vació y si está dentro del rango)
const checkTextInput = (input) => {
  //flags
  let isValid = false;
  const minChar = 3;
  const maxChar = 16;
  //verifico si está vacío
  if (isInputEmpty(input)) {
    showError(input, "Campo obligatorio.");
    return;
  }
  //verifico si está en rango
  if (!isBetween(input, minChar, maxChar)) {
    showError(input, `Debe tener entre ${minChar} y ${maxChar} caracteres'`);
    return;
  }
  showSuccess(input);
  isValid = true;
  return isValid;
};
// Validador de email
const checkEmailInput = (input) => {
  //flags
  let isValid = false;
  //verifico si está vacío
  if (isInputEmpty(input)) {
    showError(input, "Campo obligatorio.");
    return;
  }
  //verifico que sea un email
  if (!isValidEmail(input)) {
    showError(input, "Email inválido");
    return;
  }
  //verifico si el email ya está registrado
  if (isEmailRegistered(input)) {
    showError(input, "Email ya registrado");
    return;
  }
  showSuccess(input);
  isValid = true;
  return isValid;
};
// Validador de password
const checkPassword = (input) =>{
    let isValid = false
    const minChar = 8
    const maxChar = 20
    
    //verifico si está vacío
    if (isInputEmpty(input)){
        showError(input, 'Campo obligatorio.')
        return
    }
    //verifico seguridad (mayuscula, minuscula, numero y caracter especial)
    if (!passwordSecure(input)){
        showError(input, 'Debe contener 1 mayúscula, 1 minúscula, 1 caracter especial y 1 número')
        return
    }
    //verifico el rango
    if (!isBetween(input, minChar, maxChar)){
        showError(input, `Debe contener entre ${minChar} y ${maxChar} caracteres`)
        return
    }
    showSuccess(input)
    isValid = true
    return isValid
}
// Storage
const saveToLocalStorage = () =>{
  localStorage.setItem('users', JSON.stringify(users))
}
// Manejador de evento submit
const submitHandler = (e) => {
  //Previene la recarga por defecto
  e.preventDefault();
  //Verifico todos los campos
  let nameValid = checkTextInput(nameInput);
  let surnameValid = checkTextInput(surnameInput);
  let emailValid = checkEmailInput(emailInput);
  let passwordValid = checkPassword(passwordInput);
  //si todos los flags son true
  let validNewUser = nameValid && surnameValid && emailValid && passwordValid;
  //agrego al usuario
  if (validNewUser){
    users.push({
      name: nameInput.value,
      surname: surnameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    })
  }
  saveToLocalStorage();
  window.location.href = 'login.html';
  console.log("Formulario de registro enviado");
};

const init = () => {
  registerForm.addEventListener("submit", submitHandler);
  nameInput.addEventListener("input", () => checkTextInput(nameInput));
  surnameInput.addEventListener("input", () => checkTextInput(surnameInput));
  emailInput.addEventListener("input", () => checkEmailInput(emailInput));
  passwordInput.addEventListener('input', () => checkPassword(passwordInput))
};
init();
