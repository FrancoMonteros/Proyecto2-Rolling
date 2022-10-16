
// //*creamos una funcion para borrar un producto:*//
// const borrarUsuario = (email) =>{
//     console.log(email);
//     //*para borrar un producto debo filtar el array y devolverlo sin el producto, para ello necesito el codigo para vincularlo, para eso usamos el metodo filter:
//     const ListaUsuariosFiltrados = ListaUsuarios.filter(usuariosRegistrados => {
//         //*utilizamos el metodo toString ya que el array esta en formato string , el metodo tostring transforma un numero en string y lo vuelve comparable, luego le pido a la funcion que me traiga todo los productos salvo el que tenga el codigo:
//         return usuariosRegistrados.email !== email.tostring()
//     }) 
//     console.log(ListaUsuariosFiltrados);
//     //* ahora cambio mi arrayproducto por el nuevo arrayfiltrado, es decir lo reemplazo:*//
//     datosUsuraios = ListaUsuariosFiltrados;
//     //* ahora necesito enviar el nuevo array a JSON:*//
//     localStorage.setItem(`ListaUsuarios`,JSON.stringify(datosUsuraios))
//     //*actualizo la pagina para cargar los cambios*//
//     window.location.reload()


// }
//creo variables
const clickButton = document.querySelectorAll('.button') //selecciono todos los botones

let listbutton;

function updateListButton() {
    listbutton = document.querySelectorAll('.button')
}

//cargo el localstorage de listaproductos para verificar si tengo algo
let listaProductos =JSON.parse(localStorage.getItem('listaProductos')) || []
let catalago = document.getElementById("catalogo")


// class HamburguesaFija{
//     constructor(producto, url, descripcion, precio){
//         this.producto = producto;
//         this.url = url;
//         this.descripcion = descripcion;
//         this.precio = precio
//     }    
// }

let producto={
    producto: 'nicolas',
    codigo: '007',
    url: 'viruel',
    descripcion: 'fullstack'
}
let muestrasFijas = [{producto, url, codigo, descripcion}]



window.addEventListener('load', crearCard(muestrasFijas))


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
    //*creamos una alerta para que el usuario sepa que la creacion fue exitosa
    Swal.fire(
        "Agregado a Carrito",
        "",
        "success"
    );

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


