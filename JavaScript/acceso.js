//*creamos un usuario Administracidor
let usuarioAdmin = {nombre:"Admin",password:"Admin1234"};
//* creamos las variables
let datosUsuraios2 = JSON.parse(localStorage.getItem(`datosUsuraios`));
let inputEmailAcceso = document.getElementById(`inputEmailAcceso`);
let inputPasswordAcceso = document.getElementById(`inputPasswordAcceso`);
let formularioLogin2 = document.getElementById(`RegistraseLogin`);
let inicioSesion = false;

//*asociando eventos y funciones *//
  inputEmailAcceso.addEventListener("blur", () => {
    validateEmailLogin(inputEmailAcceso);
  });  
  function validateEmailLogin(input) {
    let regEmail2 =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (regEmail2.test(input.value)) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }
  inputPasswordAcceso.addEventListener("blur", () => {
    validatePass2(inputPasswordAcceso);    
  });
function validatePass2(input) {
  let regPass2 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  if (regPass2.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }}

 
//   //* creamos una funcion para en logueo del usuario
//   function logeoAcceso(e) {
//     e.preventDefaul();
//     if (condition) {
        
//     }
//   }
