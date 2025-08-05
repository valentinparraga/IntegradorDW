import { appState } from "./data.js";
import { renderPage, navCartSetup, showMoreBoards, showMoreTrips, showForm } from './render.js';
import { getActiveUser, logoutSession } from "./utils.js";
import { buyProductHandler } from "./cart.js"
//Elementos de productos
const productsCardsContainer = document.getElementById("products-cards-container");
// Botones de ver más
const showMoreBoardsBtn = document.getElementById("show-more-products-btn");
const showMoreTripsBtn = document.getElementById("show-more-trips-btn");
//Usuario activo
const activeUser = getActiveUser()

//Lógica de navbar con sesión iniciada
function activeSessionHandler() {
  const logOutBtn = document.getElementById('logout-btn'); //capto el botón de SALIR  
  const userName = document.getElementById('hello-user'); //capto el nombre del usuario logeado
  if (activeUser && userName && logOutBtn) {              //si hay usuario activo, nombre de user y botón de salir
    logOutBtn.addEventListener('click', logoutSession)    //escucho el evento click en el botón SALIR y disparo la función que borra la sesión
  }
}

const contactForm = document.getElementById('contact-form');
const formValidation = (e) =>{
  e.preventDefault();
  console.log('Disparaste el form validation');
  contactForm.addEventListener('submit', formValidation);
}

function init() {
  if (activeUser){
    appState.session.isLoggedIn = true;
    appState.session.user = activeUser;
    
  }
  renderPage();
  navCartSetup();
  showForm();
  activeSessionHandler();
  showMoreBoardsBtn.addEventListener("click", showMoreBoards);
  showMoreTripsBtn.addEventListener("click", showMoreTrips);
  productsCardsContainer.addEventListener("click", buyProductHandler);
}

document.addEventListener("DOMContentLoaded", init);
