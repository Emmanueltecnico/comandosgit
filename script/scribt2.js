let propietario, fecha, hora , tipo, placa, cantidad, modelo

let formulario = document.getElementById("form2")



formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    LeerDatos()
})


function LeerDatos() {
    propietario= document.getElementById('Propietario').value
    fecha = document.getElementById('Fecha').value
    hora = document.getElementById('Hora').value
    tipo = document.getElementById('tipo').value
    placa = document.getElementById('Placa').value
    cantidad = document.getElementById('Cantidad').value
    modelo = document.getElementById('Modelo').value

    ValidarData(propietario, fecha, hora , tipo, placa, cantidad, modelo)
    GuardarLocalStorage(propietario, fecha, hora , tipo, placa, cantidad, modelo)
   
}

function ValidarData(Propietario, Fecha, Hora , tipo, Placa, Cantidad, Modelo) {
    if (Propietario.length==0 || Fecha.length==0 ||Hora.length==0 || tipo.length==0 || Placa.length==0 || Cantidad.length==0 || Modelo.length==0) {
    swal.fire({
        title: 'Oops...',
        text: 'Complete los campos faltantes',
        icon: 'error',
        confirmButtonText: 'OK',
        iconColor: 'red'
        })
    }
    else GuardarLocalStorage(Nombre,Correo,Mensaje)
}

function GuardarLocalStorage(Horas,Inicio, Entrada, Tipo, Placa, Propietario, Modelo) {
    localStorage.setItem('Horas',horas)
    localStorage.setItem('Inicio',inicio)
    localStorage.setItem('Entrada',entrada)
    localStorage.setItem('Tipo',tipo)
    localStorage.setItem('Placa',placa)
    localStorage.setItem('Propietario',propietario)
    localStorage.setItem('Modelo',modelo)
}

function ListarData() {
    let horasUsu = localStorage.getItem('Horas')
    let inicioUsu = localStorage.getItem('Inicio')
    let entradaUsu = localStorage.getItem('Entrada')
    let tipoUsu = localStorage.getItem('Tipo')
    let placaUsu = localStorage.getItem('Placa')
    let propietarioUsu = localStorage.getItem('Propietario')
    let modeloUsu = localStorage.getItem('Modelo')
}


function GuardarLocalStorage(Horas,Inicio, Entrada, Tipo, Placa, Propietario, Modelo) {
    localStorage.setItem('Horas',horas)
    localStorage.setItem('Inicio',inicio)
    localStorage.setItem('Entrada',entrada)
    localStorage.setItem('Tipo',tipo)
    localStorage.setItem('Placa',placa)
    localStorage.setItem('Propietario',propietario)
    localStorage.setItem('Modelo',modelo)
    ListarData ()
}