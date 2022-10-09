//Primero que nada se consulta si hay algo en el localStorage

let listaProductosLS = JSON.parse(localStorage.getItem("listaProductos")) || [];

//Traigo el contenedor (Article que es donde se van cargando todas las cards)
let contenedorIndex = document.getElementById("contenedor")
console.log(contenedorIndex);
//Compruebo que este todo bien
console.log(listaProductosLS);

//Yo necesito que se repita la misma card para cargar nuevos productos
// El (+=) es para tomar lo que ya tiene y agregarle algo mas

//creamos una funcion que me cree mas card
const crearCard = (producto) =>
    
    contenedorIndex.innerHTML += `<div class="card mx-3 my-3 p-3" style="width: 250px;">  
    <img src="${producto.url}" class="card-img-top" alt="Imagen1">
    <div class="card-body">
      <h5 class="card-title">${producto.producto}</h5>
      <p class="card-text">${producto.codigo}</p>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text"> u$s${producto.precio}</p>
    </div>
  </div>`;

 // ahora compruebo si (listaProductosLS) esta vacio o no, y asi ir colocando otra card.
 //recorro el array del listado
 for (let index = 0; index < listaProductosLS.length; index++) {
    const element = listaProductosLS[index];
    
    
    crearCard(element);
 }