//Captura de datos
$(document).ready(function () {
		$("#botonInversion").on("click", cargarInversion);

		const inputNombre = $("#input-nombre")[0];
		const inputApellido = $("#input-apellido")[0];
		const inputDNI = $("#input-dni")[0];
		const inputEmail = $("#input-email")[0];
		const inputMontoInversion = $("#input-monto-inversion")[0];
		const inputPlazoInversion = $("#input-plazo-inversion")[0];
		const opcionDeposito = $("#opcion-deposito")[0];

		function cargarInversion() {

			if (inputNombre.value !== "" && inputApellido.value !== "" && inputDNI.value !== "" && inputEmail.value !== "" && inputMontoInversion.value > 0 && inputPlazoInversion.value > 0 && opcionDeposito.value !== "Seleccione") {

				if (inputPlazoInversion.value >= 1 && inputPlazoInversion.value < 90) {

					$("#lista-Inversiones").append(stringInversiones("Depósito a Plazo", 0.0004, 0.0007, 0.0012, 90, 365))

				} else if (inputPlazoInversion.value >= 90 && inputPlazoInversion.value < 365) {

					$("#lista-Inversiones").append(stringInversiones("Depósito a Plazo", 0.0007, 0.0004, 0.0012, 30, 365))

				} else if (inputPlazoInversion.value >= 365) {

					$("#lista-Inversiones").append(stringInversiones("Depósito a Plazo", 0.0012, 0.0007, 0.0004, 30, 90))
				}
			} else {

				$("#eliminarMain").remove();
				$("#mensaje").append(`<h2 class="card text-center card-title">No se ingresaron todos los datos requeridos, vuelva a intentar</h2>
                            <a href="./inversion.html" class="btn btn-primary">Volver a Intentar</a>`);
				event.preventDefault();
			}

		}

		//MouseOver y MouseUp
		$("#botonInversion").mouseover(function(){
			$("#botonInversion").css("background-color", "red");
		});
		$("#botonInversion").mouseout(function(){
			$("#botonInversion").css("background-color", "#0d6efd");
		});

		//Borrar LocalStorage
		$("botonBorrarLocalStorage").click(localStorage.clear());

		//Función retorna modificación del DOM
		function stringInversiones(tipoInversion, tasaInteres, tasaInteresOpcion2, tasaInteresOpcion3, plazo2, plazo3) {

			return `
	<div class="row row-cols-1 row-cols-md-3 g-4">
	<div id="cardDep1" class="col"> OPCIÓN 1
	  <div class="card h-100 bordesCard">
	  	<p class="card-title">Tipo Inversión: <strong>${tipoInversion}</strong></p>
	  	<p class="card-text">Nombres: <strong>${inputNombre.value}</strong></p>
	  	<p class="card-text">Apellidos: <strong>${inputApellido.value}</strong></p>
	  	<p class="card-text">Monto a Invertir: <strong>${inputMontoInversion.value}</strong></p>
	  	<p class="card-text">Plazo a Invertir: <strong>${inputPlazoInversion.value} días</strong></p>
		<p class="card-text">Tasa de Interés: <strong>${tasaInteres} diaria</strong></p>  
	  	<h3 class="card-text">Monto a ganar: ${(tasaInteres*inputPlazoInversion.value)*inputMontoInversion.value}</h3>
	  	<h3 class="card-text">Monto Total a recibir: ${((tasaInteres*inputPlazoInversion.value)*inputMontoInversion.value) + parseInt(inputMontoInversion.value)}</h3>
	  
	  <button id="solEv1" type="button" class="btn btn-primary">Solicitar Depósito a Plazo</button>
		</div>
	</div>
	<div id="cardDep2" class="col"> OPCIÓN 2
	  <div class="card h-100">
	  	<p class="card-title">Tipo Inversión: <strong>${tipoInversion}</strong></p>
	  	<p class="card-text">Nombres: <strong>${inputNombre.value}</strong></p>
	 	<p class="card-text">Apellidos: <strong>${inputApellido.value}</strong></p>
	  	<p class="card-text">Monto a Invertir: <strong>${inputMontoInversion.value}</strong></p>
	  	<p class="card-text">Plazo a Invertir: <strong>${plazo2} días</strong></p>
		<p class="card-text">Tasa de Interés: <strong>${tasaInteresOpcion2} diaria</strong></p>  
	  	<h3 class="card-text">Monto a ganar: ${(tasaInteresOpcion2*plazo2)*inputMontoInversion.value}</h3>
	  	<h3 class="card-text">Monto Total a recibir: ${((tasaInteresOpcion2*plazo2)*inputMontoInversion.value) + parseInt(inputMontoInversion.value)}</h3>
	  
	    <button id="solEv2" type="button" class="btn btn-primary">Solicitar Depósito a Plazo</button>
	  </div>
	</div>
	<div id="cardDep3" class="col"> OPCIÓN 3
	  <div class="card h-100">
	  	<p class="card-title">Tipo Inversión: <strong>${tipoInversion}</strong></p>
	  	<p class="card-text">Nombres: <strong>${inputNombre.value}</strong></p>
	  	<p class="card-text">Apellidos: <strong>${inputApellido.value}</strong></p>
	  	<p class="card-text">Monto a Invertir: <strong>${inputMontoInversion.value}</strong></p>
	  	<p class="card-text">Plazo a Invertir: <strong>${plazo3} días</strong></p>
		<p class="card-text">Tasa de Interés: <strong>${tasaInteresOpcion3} diaria</strong></p>  
	  	<h3 class="card-text">Monto a ganar: ${(tasaInteresOpcion3*plazo3)*inputMontoInversion.value}</h3>
	  	<h3 class="card-text">Monto Total a recibir: ${((tasaInteresOpcion3*plazo3)*inputMontoInversion.value) + parseInt(inputMontoInversion.value)}</h3>
	  
	    <button id="solEv3" type="button" class="btn btn-primary">Solicitar Depósito a Plazo</button>
	  </div>
	</div>
	</div>`

		}
}
)