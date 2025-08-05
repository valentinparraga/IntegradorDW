import { appState } from "./data.js";
import { isInputEmpty } from "./utils.js";

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const formFeedback = document.getElementById('form-feedback');

//Lista de usuarios
const users = JSON.parse(localStorage.getItem('users')) || [];
//Auxiliares (mover a utils.js)
//Feedback error
const showError = (message) => {
  formFeedback.style.display = "block";
  formFeedback.textContent = message;
};
//Email registrado
const isEmailRegistered = (input) =>{
    return users.some((user) => user.email === input.value.trim())
}
//Coincidencia de contraseña
const isPasswordMatched = (input) =>{
    //guardo en user la coincidencia de mail e/ input y localStorage
    const user = users.find((user) => user.email === emailInput.value.trim())
    //si la password de ese mail coincide con la ingresada devuelve true
    return (user.password === input.value.trim())
}
//  Validar usuario
const isValidUser = () =>{
    let isValid = false
    //validar email <> vacío
    if (isInputEmpty(emailInput)){
        showError('Completá el campo')
        return
    }
    //validar password <> vacío
    if (isInputEmpty(passwordInput)){
        showError('Completá el campo')
        return
    }
    //validar existencia de email
    if (!isEmailRegistered(emailInput)){
        showError('Email no registrado')
        return
    }
    //validar coincidencia email-pw
    if (!isPasswordMatched(passwordInput)){
        showError('La contraseña no coincide')
        return
    }
    console.log('PASÉ TODOS LOS FILTROS');
    formFeedback.textContent = ''
    isValid = true
    return isValid
}
//Storage
const saveToSessionStorage = (user) =>{
  //guardo usuario en appState
  appState.session.user = { ...user };
  appState.session.isLoggedIn = true;
  sessionStorage.setItem("user", JSON.stringify(appState.session.user));
}
//Manejador de evento submit
const submitHandler = (e) => {
    e.preventDefault();
    //validar los inputs
    if(isValidUser()){
    //verificar al usuario (si se encuentra en la base de datos)
        const user = users.find((user) => user.email === emailInput.value.trim())
        //guardar user en Session Storage
        saveToSessionStorage(user);
        //redirigir al home
        window.location.href = 'index.html'
    }
}

const init = () =>{
    loginForm.addEventListener('submit', submitHandler)
}
init()