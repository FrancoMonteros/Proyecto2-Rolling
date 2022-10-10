//* va en admin.js
 // //*inseratmos la funcion para ir agregando los usuarios a la pagina del Administrador
    //   creadorFilaUsuario()
// let ListaUsuarios = document.getElementById(`ListaUsuarios`);
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