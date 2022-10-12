//creo variables
const clickButton = document.querySelectorAll('.button') //selecciono todos los botones
const tbody = document.querySelector('.tbody')
let carrito;
let listbutton;

function updateListButton() {
    listbutton = document.querySelectorAll('.button')
}

//cargo el localstorage de listaproductos para verificar si tengo algo
let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || []
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
listaProductos.forEach((producto) => {
    crearCard(producto)
    updateListButton()
})


//recorro la matriz para escuchar el evento click
listbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

//selecciono todo el contendor
function addToCarritoItem(e) {
    const button = e.target
    const item = button.closest('.card') //este metodo buscar el contenedor mas cercano

    const itemTitle = item.querySelector('.card-title').textContent;//obtengo el titulo 
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
    } else {
        carrito.push(newItem)
        localStorage.setItem("nuevoProducto", JSON.stringify(carrito))//guardamos en LocalStorage para renderizar en carrito.html
    }
     CarritoTotal()

}
//agregamos los productos y renderisamos a carrito.html
function renderCarrito() {

    tbody.innerHTML = ''
    carrito = JSON.parse(localStorage.getItem("nuevoProducto")) || []
    console.log(carrito);
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const content = `
        <th scope="row">1</th>
          <td class="tableProductos">
            <img src=${item.img} alt="imagen2" class="d-none d-md-block">
            <h6 class="titulo">${item.title}</h6>
          </td>
          <td class="tablePrecio">
            <p>${item.precio}</p>
          </td>
          <td class="tableCantidad">
            <input type="number" min="1" value=${item.cantidad} class = "inputElemento">
            <button class="eliminar btn btn-danger fw-bold mx-3">X</button>
          </td>
        `

        tr.innerHTML = content; //agregamos la const Content
        tbody.append(tr) // agregamos al tbody la const tr

    })
    CarritoTotal()
}
//agregamos la funcion para la suma de los productos al carrito de compra.
function CarritoTotal() {
    let total = 0;
    const itemCardTotal = document.querySelector('.intemCardTotal')
    CarritoTotal = JSON.parse(localStorage.getItem("nuevoProducto")) || []
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        total = total + parseInt(precio) * item.cantidad
    })
    itemCardTotal.innerHTML = `Total $${total}`
}


