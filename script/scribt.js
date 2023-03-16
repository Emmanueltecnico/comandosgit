let nombre, correo, mensaje;
let formulario = document.getElementById("form")
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    LeerDatos()
})
function LeerDatos() {
    nombre = document.getElementById("nombre").value
    correo = document.getElementById("correo").value
    mensaje = document.getElementById("textarea").value
}
function ValidarData(nombre, correo, mensaje)
 GuardarLocalStorage(nombre,correo,mensaje)
{
    if (nombre.length == 0 || correo.length == 0 || mensaje.length == 0) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
}
function GuardarLocalStorage(nombre,correo,mensaje) {
    localStorage.setItem("Nombre",nombre)
    localStorage.setItem("Correo",correo)
    localStorage.setItem("Mensaje",mensaje)
}
function ListarData() {
    let nombreUsu = localStorage.getItem("Nombre")
    let correoUsu = localStorage.getItem("Correo")
    let mensajeUsu = localStorage.getItem("Correo")
}
function GuardarLocalStorage(nombre,correo,mensaje) {
    localStorage.setItem("Nombre",nombre)
    localStorage.setItem("Correo",correo)
    localStorage.setItem("Mensaje",mensaje)
    ListarData()
}