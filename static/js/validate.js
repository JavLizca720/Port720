const form_log = document.querySelector('#form');

const validationName =document.getElementById('validationName');
const validationRead =document.getElementById('validationRead');
const validationMessage =document.getElementById('validationMessage');

const name =document.getElementById('name');
const read =document.getElementById('read');
const message =document.getElementById('message');

form_log.addEventListener("submit", (e) => {
    e.preventDefault(); // detiene el proceso de envío del formulario
  
    // Ejecutar ambas validaciones
    const nameValid = validateName();
    const readValid = validateRead();
    const messageValid = validateMessage();
  
    // Si ambas validaciones son verdaderas, enviar el formulario
    if (nameValid && readValid && messageValid) {
      form_log.submit(); // envía los datos del formulario al servidor o a la página web
    }
  });

validationName.style.display = "none";
validationRead.style.display = "none";
validationMessage.style.display = "none";

const validateName = () => {
  if (!name.value.trim()) {
    validationName.style.display = "block";
    name.style.border = "1px solid red";
    return false;
  }

  validationName.style.display = "none";
  name.style.border = "1px solid green";
  return true;
};

const validateRead = () => {
  if (!read.value.trim()) {
      validationRead.style.display = "block";
      read.style.border = "1px solid red";
      return false;
  }
  validationRead.style.display = "none";
  read.style.border = "1px solid green";
  return true;
};

const validateMessage = () => {
    if (!message.value.trim()) {
        validationMessage.style.display = "block";
        message.style.border = "1px solid red";
        return false;
    }
    validationMessage.style.display = "none";
    message.style.border = "1px solid green";
    return true;
}