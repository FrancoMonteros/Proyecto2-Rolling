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
function addItemCarrito(newItem) {
    carrito = JSON.parse(localStorage.getItem("nuevoProducto")) || []
    //modifico la cantidad
    if (carrito.includes(`${newItem.title}`)) {
        console.log("el producto ya existe, tengo que resolver como cambiar la cantidad con el mismo producto");
    }else{
        carrito.push(newItem)
        localStorage.setItem("nuevoProducto", JSON.stringify(carrito))//guardamos en LocalStorage para renderizar en carrito.html
    }
    //    if (carrito === null) { //consulto si en el carrito ya tengo algo creado 
    //        carrito = []
    //     }
    // const inputElemento = tbody.getElementsByClassName('inputElemento')
    // for (let i = 0; i < carrito.length ; i++){
    //   if (carrito[i].title.trim() === newItem.title.trim()) {
    //     carrito[i].cantidad++;
    //     const inputValue = inputElemento[i].value
    //     inputValue.value++;
    //     return null;
    // }
    // }
    // carritoTotal()
   
}



// function carritoTotal() {
//   let total = 0;
//   const itemCardTotal = document.querySelector('.intemCardTotal')
//   carrito.forEach((item) => {
//     const precio = Number(item.precio.replace("$", ''))
//     total = total + precio*item.cantidad 
//   })
//   itemCardTotal.innerHTML = `Total $${total}`
// }


