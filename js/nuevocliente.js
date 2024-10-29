//ElementosDOM
const nombreCliente = document.querySelector("#nombre")
const correCliente = document.querySelector("#email")
const telefono = document.querySelector("#telefono")
const empresa = document.querySelector("#empresa")
const botonSubmit = document.querySelector("#formulario input[type=submit]")

//listeners

const datosCliente ={
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    id: 0
}

nombreCliente.addEventListener("blur", validar)
correCliente.addEventListener("blur",validar)
telefono.addEventListener("blur",validar)
empresa.addEventListener("blur",validar)

//funciones

function validar(ev){
    const campoForm = ev.target

    if(ev.target.id === "email"){
        if (!validarCorreo(campoForm.value)){
            mostrarError("Email inválido",campoForm.parentElement)
            return;
        }
    }

    if(campoForm.id === "telefono"){
        if (!validarTlf(campoForm.value)){
            mostrarError("Teléfono inválido",campoForm.parentElement)
            return;
        }
    }

    if(campoForm.value === ""){
        mostrarError("El campo no puede estar vacío",campoForm.parentElement)
    }

    limpiarAlerta(campoForm.parentElement)

    // Asignar los valores
    datosCliente[campoForm.name] = campoForm.value.trim()

    // Comprobar el objeto de email
    comprobarDatosCliente()

}

function mostrarError(mensaje,campoForm){
    const contenedor = document.createElement("div")
    contenedor.classList.add("bg-red-500")

    const contenidoMensaje = document.createElement("p")

    contenidoMensaje.innerText = mensaje
    contenidoMensaje.classList.add("text-bold","text-center","text-white")
    contenedor.appendChild(contenidoMensaje)

    campoForm.appendChild(contenedor)

    console.log(mensaje)
}

function limpiarAlerta (referencia) {
    // Comprueba si ya existe una alerta
    const alerta = referencia.querySelector('.bg-red-600')
    if (alerta) {
        alerta.remove()
    }
}

function comprobarDatosCliente () {
    if (Object.values(datosCliente).includes('')) {
        botonSubmit.classList.add('opacity-50')
        botonSubmit.disabled = true
        return
    }
    botonSubmit.classList.remove('opacity-50')
    botonSubmit.disabled = false
}

function validarCorreo(correo){
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    return regex.test(correo)
}

function validarTlf(telefono){
    const regex = RegExp("^[0-9]{9}$")
    return regex.test(telefono)
}