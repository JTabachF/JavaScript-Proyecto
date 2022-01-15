//Captura de datos
let botonTarjeta = document.getElementById("botonTarjeta");
botonTarjeta.addEventListener("click", cargarTarjeta);


const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputDNI = document.getElementById("input-dni");
const inputEmail = document.getElementById("input-email");
const opcionTrabajador = document.getElementById("opcion-trabajador");
const inputRenta = document.getElementById("input-renta");
const inputMeses = document.getElementById("input-meses");
const opcionSeguro = document.getElementById("opcion-seguro");

function cargarTarjeta() {

	if (inputNombre.value !== "" && inputApellido.value !== "" && inputDNI.value !== "" && inputEmail.value !== "" && opcionTrabajador.value !== "Seleccione" && inputRenta.value > 0 && inputMeses.value > 0 && opcionSeguro.value !== "Seleccione") {
		
		if (inputRenta.value>=1 && inputRenta.value<1000){

			var cardTarjeta = document.getElementById("lista-tarjetas")
			cardTarjeta.innerHTML = stringTarjeta ("Tarjeta Visa Gold", "Tarjeta Mastercard Gold", "Tarjeta American Gold", "visagold.jpg", "mastercardgold.jfif", "americangold.jfif");
			

		}else if (inputRenta.value>=1000 && inputRenta.value<2000){

			var cardTarjeta = document.getElementById("lista-tarjetas")
			cardTarjeta.innerHTML = stringTarjeta ("Tarjeta Visa Platinum", "Tarjeta Mastercard Platinum", "Tarjeta American Aerolinea", "visaplatinum.jpg", "mastercardplatinum.jfif", "americanaerolinea.jfif");  
			
		}else if (inputRenta.value>=2000){

			var cardTarjeta = document.getElementById("lista-tarjetas")
			cardTarjeta.innerHTML = stringTarjeta ("Tarjeta Visa Signature", "Tarjeta Mastercard Black", "Tarjeta American Platinum", "visasignature.jpg", "mastercardblack.jfif", "americanplatinum.jfif");  
		}									
    } else {
        
        const eliminarMain = document.getElementById("eliminarMain");
        eliminarMain.parentElement.removeChild(eliminarMain);

        const mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `<h2 class="card text-center card-title">No se ingresaron todos los datos requeridos, vuelva a intentar</h2>
                            <a href="./Tarjeta.html" class="btn btn-primary">Volver a Intentar</a>`;
    }

}

//MouseOver y MouseUp
botonTarjeta.onmouseover = () => {
    botonTarjeta.style.backgroundColor = "red";
}
botonTarjeta.onmouseout = () => {
    botonTarjeta.style.backgroundColor = "#0d6efd";
}

//Borrar LocalStorage
let botonBorrarLocalStorage = document.getElementById("botonBorrarLocalStorage");
botonBorrarLocalStorage.addEventListener("click", localStorage.clear());

//Función retorna modificación del DOM
function stringTarjeta (nombreTarjetaVisa, nombreTarjetaMastercard, nombreTarjetaAmerican, imgVisa, imgMastercard, imgAmerican) {

	return `
	<div class="row row-cols-1 row-cols-md-3 g-4">
	<div id="tarjetaMod1" class="col" onmouseover=mouseoverAnimacion1()>
	  <div class="card h-100">
		<img src="./recursos/${imgVisa}" class="card-img-top" alt="Imagen Tarjeta">
		<div class="card-body pruebaM">
		  <h5 class="card-title">${nombreTarjetaVisa}</h5>
		  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra tarjeta ${nombreTarjetaVisa} con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
		  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
		  <button onclick="clickAnimacion1()" type="button" id="solicitarTarjetaa" class="btn btn-primary">Solicitar Tarjeta</button>
		</div>
	  </div>
	</div>
	<div id="tarjetaMod2" class="col" onmouseover=mouseoverAnimacion2()>
	  <div class="card h-100">
		<img src="./recursos/${imgMastercard}" class="card-img-top kkko" alt="Imagen Tarjeta">
		<div class="card-body">
		  <h5 class="card-title">${nombreTarjetaMastercard}</h5>
		  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra ${nombreTarjetaMastercard} con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
		  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
		  <button onclick="clickAnimacion2()" type="button" id="solicitarTarjetab" class="btn btn-primary">Solicitar Tarjeta</button>
		</div>
	  </div>
	</div>
	<div id="tarjetaMod3" class="col" onmouseover=mouseoverAnimacion3()>
	  <div class="card h-100">
		<img src="./recursos/${imgAmerican}" class="card-img-top kkko" alt="Imagen Tarjeta">
		<div class="card-body">
		  <h5 class="card-title">${nombreTarjetaAmerican}</h5>
		  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra ${nombreTarjetaAmerican} con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
		  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
		  <button onclick="clickAnimacion3()" type="button" id="solicitarTarjetac" class="btn btn-primary">Solicitar Tarjeta</button>
		</div>
	  </div>
	</div>
	</div>`

}