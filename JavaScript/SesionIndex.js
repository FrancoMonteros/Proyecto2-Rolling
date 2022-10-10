//variables
let usuarioAdmin = {email:"admin@admin.com",password:"Admin1234"};
let stateSesion = JSON.parse(sessionStorage.getItem("EstadoDeSesion")) || false;
let user = JSON.parse(sessionStorage.getItem("usuarioActivo")) || "";
let linkAdmin = document.getElementById("linkAdmin");
let regBtn = document.getElementById("regBtn");
let userBtn = document.getElementById("userBtn");
let exitBtn = document.getElementById("exitBtn");

if (stateSesion) {
  if (user.email === usuarioAdmin.email && user.password===usuarioAdmin.password) {
    linkAdmin.className = "nav-item text-light text-decoration-none text-uppercase fw-bolder mx-2";
    regBtn.className = "d-none";
    exitBtn.className = "btn btn-dark";
    userBtn.innerHTML = "Admin";
    userBtn.removeAttribute("href");
    exitBtn.addEventListener("click", closeSesion);
  } else {
    regBtn.className = "d-none";
    exitBtn.className = "btn btn-dark";
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