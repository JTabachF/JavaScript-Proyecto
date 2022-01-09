//Captura de datos
let botonSimulacion = document.getElementById("botonSimulacion");
botonSimulacion.addEventListener("click", cargarSimulaciones);

const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputDNI = document.getElementById("input-dni");
const inputEmail = document.getElementById("input-email");
const opcionCredito = document.getElementById("opcion-credito");
const inputMonto = document.getElementById("input-monto");
const inputCuotas = document.getElementById("input-cuotas");
const opcionSeguro = document.getElementById("opcion-seguro");

const listaSimulaciones = document.getElementById("lista-simulaciones");

//JSON en localstorage
let arraySimulaciones = JSON.parse(localStorage.getItem("arraySimulaciones")) || [];

if (arraySimulaciones.length) {
    imprimirSimulaciones(arraySimulaciones);
}

class simulaciones {
    constructor(nombre, apellido, dni, email, opCredito, monto, cuotas, opSeguro) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.opCredito = opCredito;
        this.monto = monto;
        this.cuotas = cuotas;
        this.opSeguro = opSeguro;
    }
}

function cargarSimulaciones() {

    if (inputNombre.value !== "" && inputApellido.value !== "" && inputDNI.value !== "" && inputEmail.value !== "" && opcionCredito.value !== "Seleccione" && inputMonto.value > 0 && inputCuotas.value > 0 && opcionSeguro.value !== "Seleccione") {

        arraySimulaciones.push(new simulaciones(
            inputNombre.value,
            inputApellido.value,
            inputDNI.value,
            inputEmail.value,
            opcionCredito.value,
            inputMonto.value,
            inputCuotas.value,
            opcionSeguro.value,
        ));
        actualizarLocalStorage(arraySimulaciones);
        imprimirSimulaciones(arraySimulaciones);
    } else {
        
        const eliminarMain = document.getElementById("eliminarMain");
        eliminarMain.parentElement.removeChild(eliminarMain);

        const mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `<h2 class="card text-center card-title">No se ingresaron todos los datos requeridos, vuelva a intentar</h2>
                            <a href="simulador.html" class="btn btn-primary">Volver a Intentar</a>`;
    }

}

function imprimirSimulaciones(array) {
    listaSimulaciones.innerHTML = "";
    array.forEach((simulaciones) => {
        const cardSimulaciones = `<div class="card-header"><h2>Simulación </h2></div>
          <div class="card-body">
          <p class="card-title">Tipo Crédito: <strong>${simulaciones.opCredito}</strong></p>
          <p class="card-text">Nombres: <strong>${simulaciones.nombre}</strong></p>
          <p class="card-text">Apellidos: <strong>${simulaciones.apellido}</strong></p>
          <p class="card-text">Monto a Solicitar: <strong>${simulaciones.monto}</strong></p>
          <p class="card-text">Cuotas: <strong>${simulaciones.cuotas}</strong></p>
          <h3 class="card-text">Monto Cuota a pagar: ${((simulaciones.monto/simulaciones.cuotas)*1.19).toFixed(0)}</h3>
          <h3 class="card-text">Monto Total a Pagar: ${(((simulaciones.monto/simulaciones.cuotas)*1.19)*simulaciones.cuotas).toFixed(0)}</h3>
          
          <button type="submit" class="btn btn-primary">Solicitar Simulación</button>
          <hr>`;
        listaSimulaciones.innerHTML += cardSimulaciones;

    });
}

// funcion para actualizar localStorage
function actualizarLocalStorage(array) {
    localStorage.setItem("arraySimulaciones", JSON.stringify(array));
}
//Borrar titulo
if (arraySimulaciones.length > 0) {
    const eliminar = document.getElementById("sinSimu");
    sinSimu.parentElement.removeChild(eliminar);
}
//MouseOver y MouseUp
botonSimulacion.onmouseover = () => {
    botonSimulacion.style.backgroundColor = "red";
}
botonSimulacion.onmouseout = () => {
    botonSimulacion.style.backgroundColor = "#0d6efd";
}
//Borrar LocalStorage
let botonBorrarLocalStorage = document.getElementById("botonBorrarLocalStorage");
botonBorrarLocalStorage.addEventListener("click", localStorage.clear());