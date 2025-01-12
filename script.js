'use strict';

// Referencio los elementos del DOM
const inputEmail = document.querySelector('#inputEmail');
const botonVerificarEmail = document.querySelector('#botonVerificarEmail');

// Funcion para validar el email
function validarEmail(email){

  // Expresion regular con la estructura basica de un email
  let regex = /^\w+@\w+\.\w+$/gi;
  
  // Resultado de la validacion
  let respuesta = 
    regex.test(email)
      ? 'Email Valido'
      : 'Email Invalido';

  return respuesta;
}

// PROGRAMA PRINCIPAL
botonVerificarEmail.addEventListener('click', ()=>{
  let respuesta = validarEmail(inputEmail.value);
  alert(respuesta);
  inputEmail.value = '';
})
