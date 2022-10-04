//*creamos una clase
class User{
    constructor(nombre,email,password){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}
//*creamos las variables de los inputs del formularios de registros*//
let inputNombre = document.getElementById(`inputNombre`);
let inputEmail = document.getElementById(`inputEmailRegistro`);
let inputPassword = document.getElementById(`inputPasswordRegistro`);
let inputPassword2 = document.getElementById(`inputPasswordRegistro2`);
let form = document.getElementById(`RegistrarseForm`);
console.log(form);
//* creamos una variable para guardar en localStogare, o mostrar array vacio*//
let datosUsuraios = JSON.parse(localStorage.getItem(`datosUsuraios`))||[];


//*creamos eventos para el boton registar*//
const handleSubmit=(e)=>{
    //*evita actualizar pagina
    e.preventDefault();
    //*creamos funciones para validar los campos del registro*//


    //* creamos un nuevo usuario:
    const nuevoUsuario = new User(inputNombre.value,inputEmail.value,inputPassword.value);
    //*hago un push con los datos de los usuarios:
    console.log(nuevoUsuario);
    //*console log para ver lo que tenemos 
    datosUsuraios.push(nuevoUsuario)
    //*consulto que hay en el array
   console.log(datosUsuraios);
   //*creamos una alerta para que el usuario separ que la creacion fue exitosa
   Swal.fire(
       "Usuario creado",
       "Su usuario fue correctamente cargado",
       "success"
     );  
    //*mando los datos a local storage usando metoso stringify
    localStorage.setItem(`datosUsuarios`,JSON.stringify(datosUsuraios))  
    //*utilizo window.location.reload para actualizar la pagina
    window.location.reload()
    //*reseteo formulario para que puedan completar siguiente producto
    form.reset()
   
}
/*creamos un evento para que el formulario escuche*/
form.addEventListener(`submit`,handleSubmit);

