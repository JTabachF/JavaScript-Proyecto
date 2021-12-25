//Captura de datos
let botonTarjeta = document.getElementById("boton");
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
		cardTarjeta.innerHTML = `
		<div class="row row-cols-1 row-cols-md-3 g-4">
		<div class="col">
		  <div class="card h-100">
			<img src="./recursos/visagold.jpg" class="card-img-top" alt="Imagen Tarjeta">
			<div class="card-body">
			  <h5 class="card-title">Tarjeta Visa Gold</h5>
			  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra tarjeta Visa Gold con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
			  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
			  <button type="submit" class="btn btn-primary">Solicitar Tarjeta</button>
			</div>
		  </div>
		</div>
		<div class="col">
		  <div class="card h-100">
			<img src="./recursos/mastercardgold.jfif" class="card-img-top" alt="Imagen Tarjeta">
			<div class="card-body">
			  <h5 class="card-title">Tarjeta Mastercard Gold</h5>
			  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra tarjeta Mastercard Gold con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
			  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
			  <button type="submit" class="btn btn-primary">Solicitar Tarjeta</button>
			</div>
		  </div>
		</div>
		<div class="col">
		  <div class="card h-100">
			<img src="./recursos/americangold.jfif" class="card-img-top" alt="Imagen Tarjeta">
			<div class="card-body">
			  <h5 class="card-title">Tarjeta American Gold</h5>
			  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra tarjeta American Gold con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
			  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
			  <button type="submit" class="btn btn-primary">Solicitar Tarjeta</button>
			</div>
		  </div>
		</div>
		</div>`;  
		event.preventDefault();

		}else if (inputRenta.value>=1000 && inputRenta.value<2000){

		var cardTarjeta = document.getElementById("lista-tarjetas")
		cardTarjeta.innerHTML = `
		<div class="row row-cols-1 row-cols-md-3 g-4">
		<div class="col">
		  <div class="card h-100">
			<img src="./recursos/visaplatinum.jpg" class="card-img-top" alt="Imagen Tarjeta">
			<div class="card-body">
			  <h5 class="card-title">Tarjeta Visa Platinum</h5>
			  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra tarjeta Visa Platinum con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
			  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
			  <button type="submit" class="btn btn-primary">Solicitar Tarjeta</button>
			</div>
		  </div>
		</div>
		<div class="col">
		  <div class="card h-100">
			<img src="./recursos/mastercardplatinum.jfif" class="card-img-top" alt="Imagen Tarjeta">
			<div class="card-body">
			  <h5 class="card-title">Tarjeta Mastercard Platinum</h5>
			  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra tarjeta Mastercard Platinum con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
			  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
			  <button type="submit" class="btn btn-primary">Solicitar Tarjeta</button>
			</div>
		  </div>
		</div>
		<div class="col">
		  <div class="card h-100">
			<img src="./recursos/americanaerolinea.jfif" class="card-img-top" alt="Imagen Tarjeta">
			<div class="card-body">
			  <h5 class="card-title">Tarjeta American Aerolinea</h5>
			  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra tarjeta American Aerolinea con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
			  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
			  <button type="submit" class="btn btn-primary">Solicitar Tarjeta</button>
			</div>
		  </div>
		</div>
		</div>`;  
		event.preventDefault();
		}else if (inputRenta.value>=2000){

			var cardTarjeta = document.getElementById("lista-tarjetas")
			cardTarjeta.innerHTML = `
			<div class="row row-cols-1 row-cols-md-3 g-4">
			<div class="col">
			  <div class="card h-100">
				<img src="./recursos/visasignature.jpg" class="card-img-top" alt="Imagen Tarjeta">
				<div class="card-body">
				  <h5 class="card-title">Tarjeta Visa Signature</h5>
				  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra tarjeta Visa Signature con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
				  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
				  <button type="submit" class="btn btn-primary">Solicitar Tarjeta</button>
				</div>
			  </div>
			</div>
			<div class="col">
			  <div class="card h-100">
				<img src="./recursos/mastercardblack.jfif" class="card-img-top" alt="Imagen Tarjeta">
				<div class="card-body">
				  <h5 class="card-title">Tarjeta Mastercard Black</h5>
				  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra tarjeta Mastercard Black con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
				  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
				  <button type="submit" class="btn btn-primary">Solicitar Tarjeta</button>
				</div>
			  </div>
			</div>
			<div class="col">
			  <div class="card h-100">
				<img src="./recursos/americanplatinum.jfif" class="card-img-top" alt="Imagen Tarjeta">
				<div class="card-body">
				  <h5 class="card-title">Tarjeta American Platinum</h5>
				  <p class="card-text">Estimado <strong>${inputNombre.value}</strong>, por su renta de <strong>$ ${inputRenta.value}</strong>, puede acceder a nuestra tarjeta American Platinum con un cupo de <strong>$ ${inputRenta.value*0.4}</strong>.</p>
				  <p class="card-text">Si está de acuerdo con esta propuesta, favor de aceptar en el siguiente botón</p>
				  <button type="submit" class="btn btn-primary">Solicitar Tarjeta</button>
				</div>
			  </div>
			</div>
			</div>`;  
			event.preventDefault();
		}									
    } else {
        
        const eliminarMain = document.getElementById("eliminarMain");
        eliminarMain.parentElement.removeChild(eliminarMain);

        const mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `<h2 class="card text-center card-title">No se ingresaron todos los datos requeridos, vuelva a intentar</h2>
                            <a href="./Tarjeta.html" class="btn btn-primary">Volver a Intentar</a>`;
		event.preventDefault();
    }

}

botonTarjeta.onmouseover = () => {
    botonTarjeta.style.backgroundColor = "red";
}