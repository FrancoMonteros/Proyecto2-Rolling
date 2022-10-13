class Producto{
    constructor(codigo, producto, descripcion, precio, url){
        this.codigo = codigo
        this.producto = producto
        this.descripcion = descripcion
        this.precio = precio
        this.url = url;
    }
}


//obtengo los input del formulario
let inputCodigo= document.getElementById("inputCodigo");
let inputProducto = document.getElementById("inputProducto");
let inputDescripcion = document.getElementById("inputDescripcion");
let inputPrecio = document.getElementById("inputPrecio");
let inputUrl = document.getElementById("inputUrl");
let form = document.getElementById("form")
console.log(form);
// creo array donde voy a guardar los productos (Json.parse compara si ya hay algo guardado en el localStorage)
let arrProductos = JSON.parse(localStorage.getItem("listaProductos")) || []


//Funciones

///////// Ahora creo el Producto (create) ///////
const handleSubmit=(e)=>{
    e.preventDefault();
    //creo una expresion regular para validar el URL
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    const validarUrl = regex.test(inputUrl.value);
    //esto es para validar si el usuario lleno todos los campos requeridos
    if (inputCodigo.value === "" || inputProducto.value === "" || inputDescripcion.value === "" || inputPrecio.value === "" || inputUrl.value === "") {
        alert("Debe completar todos los campos, son obligatorios")
        return;
    }
    if (!validarUrl) {
        alert("La direccion URL, es Incorrecta")
        return;
    }
   const nuevoProducto = new Producto (inputCodigo.value , inputProducto.value,
    inputDescripcion.value, inputPrecio.value , inputUrl.value)
    
    console.log(nuevoProducto)

    //Guardo primero en un array
    arrProductos.push(nuevoProducto)
    console.log(arrProductos);
    //Para guardar en localStorage
    localStorage.setItem("listaProductos", JSON.stringify(arrProductos));
    //Para resetear el Formulario (este caso utilizo la variable Form)
    form.reset()
    //Utilizo window reload para que los producto que valla creando se me agreguen sin necesidad de actualizar la pagina
    window.location.reload();
}

//ahora la etiqueta form escucha el evento
form.addEventListener("submit" , handleSubmit)

//traigo el Tbody del html

let tbodyListaProductos = document.getElementById("bodyListaProductos")

//ahora necesito recorrer el arrayProductos y me valla creando uno por uno
//entonces creo una funcion y ademas lo recorro al array con un Foreach

///////// Ahora Leo (read) ///////
const crearFilaProducto = () =>{
    //recorro el array
 arrProductos.forEach(producto => {
    //Funcion para crear productos
   return tbodyListaProductos.innerHTML += `
    <tr>
        <th>${producto.codigo}</th>
        <th>${producto.producto}</th>
        <th>${producto.descripcion}</th>
        <th> u$s ${producto.precio}</th>
        <th>${producto.url}</th>
        <th class="text-center">
      <button onclick="borrarProducto(${producto.codigo})" class="btn btn-danger my-1">Borrar</button>
      <button onclick="editarProducto(${producto.codigo})" class="btn btn-primary my-1">Editar</button>
        </th>
  </tr>`
});
}

///////// Ahora genero la opcion para Borrar (delete) ///////

const borrarProducto = (codigo) =>{
    console.log(codigo);
    //vamos a filtrar el array y devolver un array nuevo (sin el producto eliminado)
    //el metodo "filter" filtrarme los elementos y me devuelve un array nuevo
    //el metodo "toString" me cambia el dato Tipo Number a un string
    const arrayFiltrado = arrProductos.filter(producto =>{
        return producto.codigo !== codigo.toString()
    })
    console.log(arrayFiltrado);
    // ahora lo quiero igualar a mi array en admin.js
    arrProductos = arrayFiltrado;
    //luego lo guardo en localStorage
    localStorage.setItem("listaProductos" , JSON.stringify(arrProductos));
    //recargo la pagina con windows
    window.location.reload();
}


///////// Ahora genero la opcion para Editar (Update) ///////

const editarProducto = (codigo) =>{
    console.log(codigo);
    //necesitamos encontrar el producto dentro del arreglo de Productos
    //El metodo find intera entre cada producto y en el primero que haga match me lo devuelve al objeto
    const producto = arrProductos.find(producto => {
        return producto.codigo === codigo.toString();
    });
    console.log(producto);
    //relleno nuevamente los campos cuando les haga click
    inputCodigo.value = producto.codigo;
    inputProducto.value = producto.producto;
    inputDescripcion.value = producto.descripcion;
    inputPrecio.value = producto.precio;
    inputUrl.value = producto.url;
    //borramos el producto del array 
    const arrayFiltrado = arrProductos.filter(producto =>{
        return producto.codigo !== codigo.toString()
    })
    // ahora lo quiero igualar a mi array en admin.js
    arrProductos = arrayFiltrado;
    console.log(arrProductos);
    //luego lo guardo en localStorage
    localStorage.setItem("listaProductos" , JSON.stringify(arrProductos));
    
}
//llamo a la funcion para que me muestre el producto
crearFilaProducto()





//variables
// let repeated;
// //funciones
// export function random() {
//   do {
//     let code = parseInt(Math.random() * 999999);
//     repeated = repeatedCode(code);
//     if (!repeated) {
//       regCode.push(code);
//       return code;
//     } else {
//       repeated = false;
//     }
//   } while (!repeated);
// }

// function repeatedCode(code) {
//   for (let i = 0; i < listaProductos.length; i++) {
//     if (code === listaProductos[i]) {
//       repeated = true;
//       break;
//     }
//   }
//   return repeated;
// }