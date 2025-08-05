//Devuelve el usuario activo (en caso de haber) que está en el sessionStorage
export const getActiveUser = () => {
  const usersString = sessionStorage.getItem("user");
  return usersString ? JSON.parse(usersString) : null;
};
//Borra la sesión iniciada actual y redirige al index
export const logoutSession = () => {
  if (window.confirm("Se cerrará tu sesión, confirmas?")) {
    sessionStorage.removeItem("user");
    window.location.href = "index.html";
  }
};

///////////////////////////////
//FUNCIONES PARA VALIDACIONES//
///////////////////////////////
//Input vacío
export const isInputEmpty = (input) => {
  return !input.value.trim().length;
}; 
//Verificador de rango
export const isBetween = (input, min, max) => {
  let inputLength = input.value.trim().length;
  return inputLength >= min && inputLength <= max;
};
//Verifico si es un email
export const isValidEmail = (input) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(input.value.trim());
};
//Verifico si es un email que está registrado
export const isEmailRegistered = (input) => {
  return users.some((user) => user.email === input.value.trim());
};
//Verificación de password
export const passwordSecure = (input) =>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,20}$/;
    return regex.test(input.value.trim());
}



