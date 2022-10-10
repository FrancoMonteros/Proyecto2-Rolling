//variables
let usuarioAdmin = {email:"admin@admin.com",password:"Admin1234"};
let stateSesion = JSON.parse(sessionStorage.getItem("EstadoDeSesion")) || false;
let user = JSON.parse(sessionStorage.getItem("usuarioActivo")) || "";

let userBtn = document.getElementById("userBtn");
let exitBtn = document.getElementById("exitBtn");

if (stateSesion) {
  if (user.email === usuarioAdmin.email && user.password===usuarioAdmin.password) {
    linkAdmin.className = "nav-link text-light text-decoration-none text-uppercase fw-bolder mx-2 nav-text";
    
    exitBtn.className = "btn text-light ";
    userBtn.className = "btn text-light  ";
    userBtn.innerHTML = "Admin";
    userBtn.removeAttribute("href");
    exitBtn.addEventListener("click", closeSesion);
  } else {
    
    exitBtn.className = "btn text-light ";
    userBtn.className = "btn text-light ";
    userBtn.innerHTML = user.nombre;
    userBtn.removeAttribute("href");
    exitBtn.addEventListener("click", closeSesion);
  }
}
//funciones
function closeSesion() {
  if (stateSesion) {
    stateSesion = false;
    sessionStorage.setItem("EstadoDeSesion", JSON.stringify(stateSesion));
    localStorage.removeItem("user");
    window.location.replace("index.html");
  } else {
    window.location.reload();
  }
}