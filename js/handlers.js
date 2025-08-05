//Lógica de navbar con sesión iniciada
export function activeSessionHandler() {
  const logOutBtn = document.getElementById('logout-btn'); //capto el botón de SALIR  
  const userName = document.getElementById('hello-user'); //capto el nombre del usuario logeado
  if (activeUser && userName && logOutBtn) {              //si hay usuario activo, nombre de user y botón de salir
    logOutBtn.addEventListener('click', logoutSession)    //escucho el evento click en el botón SALIR y disparo la función que borra la sesión
  }
}