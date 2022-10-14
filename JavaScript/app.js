//* va en admin.js
 // //*inseratmos la funcion para ir agregando los usuarios a la pagina del Administrador
    //   creadorFilaUsuario()
// let ListaUsuarios = document.getElementById(`datosUsuarios`);
// const creadorFilaUsuario=()=>{
//   datosUsuraios.forEach(usuariosRegistrados =>{
//    return ListaUsuarios.innerHTML +=
//    `<tr>
//        <th class="text-center">${usuariosRegistrados.nombre}</th>
//        <th class="text-center">${usuariosRegistrados.email}</th>
//        <th class="text-center">${usuariosRegistrados.password}</th>
//        <button class="btn btn-primary text-center" onclick="borrarUsuario(${usuariosRegistrados.email})">Borrar</button>
//        </th>
//    </tr>`
//  });
// }
//*tengo q pasarle si o si al evento onclick el parametro para que la funcion se asocie al codigo, solo asi sabra a que codigo hace referencia cada producto*//

//*creamos una funcion para borrar un producto:*//
console.log("hola mundo");
const borrarUsuario = (email) =>{
    console.log(email);
    //*para borrar un producto debo filtar el array y devolverlo sin el producto, para ello necesito el codigo para vincularlo, para eso usamos el metodo filter:
    const ListaUsuariosFiltrados = ListaUsuarios.filter(usuariosRegistrados => {
        //*utilizamos el metodo toString ya que el array esta en formato string , el metodo tostring transforma un numero en string y lo vuelve comparable, luego le pido a la funcion que me traiga todo los productos salvo el que tenga el codigo:
        return usuariosRegistrados.email !== email.tostring()
    }) 
    console.log(ListaUsuariosFiltrados);
    //* ahora cambio mi arrayproducto por el nuevo arrayfiltrado, es decir lo reemplazo:*//
    datosUsuraios = ListaUsuariosFiltrados;
    //* ahora necesito enviar el nuevo array a JSON:*//
    localStorage.setItem(`ListaUsuarios`,JSON.stringify(datosUsuraios))
    //*actualizo la pagina para cargar los cambios*//
    window.location.reload()


}
//creo variables
const clickButton = document.querySelectorAll('.button') //selecciono todos los botones

let listbutton;

function updateListButton() {
    listbutton = document.querySelectorAll('.button')
}

//cargo el localstorage de listaproductos para verificar si tengo algo
let listaProductos =JSON.parse(localStorage.getItem('listaProductos')) || []
let catalago = document.getElementById("catalogo")

function crearCard(producto) {
    catalago.innerHTML += `
    <div class="col d-flex justify-content-center mb-4">
        <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
            <h5 class="card-title pt-2 text-center text-white">${producto.producto}</h5>
            <img src=${producto.url} class="card-img-top" alt="...">
            <div class="card-body ">

                <p class="card-text text-white-50 descripcion">${producto.descripcion}</p>
                <h5 class="text-danger fw-bolder">Precio: <span class="precio">${producto.precio}</span></h5>
                <button class="btn btn-warning w-100 button" onclick= {addToCarritoItem} >Añadir a Carrito</button>
            </div>
        </div>
    </div>
    `
}
listaProductos.forEach((producto)=>{
    crearCard(producto)
    updateListButton()
})


//recorro la matriz para escuchar el evento click
listbutton.forEach(btn =>{
    btn.addEventListener('click', addToCarritoItem) 
})

//selecciono todo el contendor
function addToCarritoItem(e) {
    const button = e.target
    const item = button.closest('.card') //este metodo buscar el contenedor mas cercano

    const itemTitle  = item.querySelector('.card-title').textContent;//obtengo el titulo 
    const itemPrecio = item.querySelector('.precio').textContent;//obtengo el precio
    const itemImagen = item.querySelector('.card-img-top').src //obtengo la imagen
    
    
    const newItem = {
        title: itemTitle,
        precio: itemPrecio,
        img: itemImagen,
        cantidad: 1
    }
    addItemCarrito(newItem)
}


//agrego el nuevo item al carrito 
//Para sumar cantidad
function addItemCarrito(newItem) {
    carrito = JSON.parse(localStorage.getItem("nuevoProducto")) || []
    //modifico la cantidad, primero busco dentro de carrido con Find
    const result = carrito.find(producto => producto.title === newItem.title); //lo busco para compararlo si son iguales
    if (result !== undefined) {
        result.cantidad++;
        let carrito2 = carrito.filter(producto => producto.title !== newItem.title) //construye un nuevo array y lo guarda dentro de carrito2
        carrito2.push(result);
        localStorage.setItem("nuevoProducto", JSON.stringify(carrito2))
    }else{
        carrito.push(newItem)
        localStorage.setItem("nuevoProducto", JSON.stringify(carrito))//guardamos en LocalStorage para renderizar en carrito.html
    }
}


