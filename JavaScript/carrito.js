//agregamos los productos y renderisamos a carrito.html
let carrito;
const tbody = document.querySelector('.tbody')

function renderCarrito() {
    
    tbody.innerHTML = ''
    carrito = JSON.parse(localStorage.getItem("nuevoProducto")) || []
    console.log(carrito);
    carrito.map(item =>{
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
    
}