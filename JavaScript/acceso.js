//*creamos un usuario Administracidor
let usuarioAdmin = {email:"admin@admin.com",password:"Admin1234"};
//* creamos las variables
let datosUsuraios2 = JSON.parse(localStorage.getItem(`datosUsuraios`));
let inputEmailAcceso = document.getElementById(`inputEmailAcceso`);
let inputPasswordAcceso = document.getElementById(`inputPasswordAcceso`);
let formularioLogin2 = document.getElementById(`RegistraseLogin`);
let botonIniciarSesion = document.getElementById(`botonIniciarSesion`);
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
  }
} 


botonIniciarSesion.addEventListener("click",ingresoUsuario)
//*creamos una funcion para validar ingreso al boton ingresar *//
function ingresoUsuario (e){
  //*evita actualizar pagina
  e.preventDefault();
  console.log(e);
  let parrafo_error2=document.getElementById(`parrafoError2`)
  if (inputEmailAcceso.value ===""||inputPasswordAcceso.value==="") {parrafo_error2.innerHTML=`<h6 class="text-center text-danger text-uppercase border-light ">${"Favor de completar todo los campos"}</h6>`;
  window.setTimeout(function(){window.location.reload()},2000);
  return

} if (inputEmailAcceso.value === usuarioAdmin.email && inputPasswordAcceso.value=== usuarioAdmin.password) {
  inicioSesion=true
  alert("Usuario Admin Ingreso correctamente")
  window.location.replace(`administrar.html`)
}else {
window.setTimeout(function(){window.location.reload(alert("Contraseña incorrecta"))},1000);
return
}  
  
}


