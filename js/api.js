//APPI en index.html
function apiFinanciera(){
    
    fetch('https://mindicador.cl/api').then(function(response) {
        return response.json();
    }).then(function(datos) {
        var todoResultados = datos;
        var txtHtml ="";
        var divOut = document.getElementById('mostrarFinanciera');
        txtHtml += `
        <div class="table-responsive">
  <table class="table align-middle">
    <thead>
      <td>
        Nombre indicador
      </td>
      <td>
        Valor
      </td>
      <td>
        Unidad de Medida
      </td>
      <td>
        Fecha
      </td>
    </thead>
    <tbody>
      <tr>
        <td>${todoResultados.uf.nombre}</td>
        <td>$ ${todoResultados.uf.valor}</td>
        <td>${todoResultados.uf.unidad_medida}</td>
        <td>${todoResultados.uf.fecha}</td>
      </tr>
      <tr>
        <td>${todoResultados.ivp.nombre}</td>
        <td>$ ${todoResultados.ivp.valor}</td>
        <td>${todoResultados.ivp.unidad_medida}</td>
        <td>${todoResultados.ivp.fecha}</td>
      </tr>
      <tr>
        <td>${todoResultados.dolar.nombre}</td>
        <td>$ ${todoResultados.dolar.valor}</td>
        <td>${todoResultados.dolar.unidad_medida}</td>
        <td>${todoResultados.dolar.fecha}</td>
      </tr>
      <tr>
        <td>${todoResultados.dolar_intercambio.nombre}</td>
        <td>$ ${todoResultados.dolar_intercambio.valor}</td>
        <td>${todoResultados.dolar_intercambio.unidad_medida}</td>
        <td>${todoResultados.dolar_intercambio.fecha}</td>
      </tr>
      <tr>
        <td>${todoResultados.euro.nombre}</td>
        <td>$ ${todoResultados.euro.valor}</td>
        <td>${todoResultados.euro.unidad_medida}</td>
        <td>${todoResultados.euro.fecha}</td>
      </tr>
      <tr>
      <td>${todoResultados.ipc.nombre}</td>
      <td>${todoResultados.ipc.valor}</td>
      <td>${todoResultados.ipc.unidad_medida}</td>
      <td>${todoResultados.ipc.fecha}</td>
    </tr>
     <tr>
        <td>${todoResultados.utm.nombre}</td>
        <td>$ ${todoResultados.utm.valor}</td>
        <td>${todoResultados.utm.unidad_medida}</td>
        <td>${todoResultados.utm.fecha}</td>
      </tr>
       <tr>
        <td>${todoResultados.imacec.nombre}</td>
        <td>${todoResultados.imacec.valor}</td>
        <td>${todoResultados.imacec.unidad_medida}</td>
        <td>${todoResultados.imacec.fecha}</td>
      </tr>
       <tr>
        <td>${todoResultados.tpm.nombre}</td>
        <td>${todoResultados.tpm.valor}</td>
        <td>${todoResultados.tpm.unidad_medida}</td>
        <td>${todoResultados.tpm.fecha}</td>
      </tr>
       <tr>
        <td>${todoResultados.tasa_desempleo.nombre}</td>
        <td>${todoResultados.tasa_desempleo.valor}</td>
        <td>${todoResultados.tasa_desempleo.unidad_medida}</td>
        <td>${todoResultados.tasa_desempleo.fecha}</td>
      </tr>
       <tr>
        <td>${todoResultados.bitcoin.nombre}</td>
        <td>$ ${todoResultados.bitcoin.valor}</td>
        <td>${todoResultados.bitcoin.unidad_medida}</td>
        <td>${todoResultados.bitcoin.fecha}</td>
      </tr>
    </tbody>
  </table>
</div>`;        
        divOut.innerHTML = txtHtml;
    }).catch(function(error) {
        console.log('Requestfailed', error);
    });
}
/*
function stringAPI(uf, ivp, dolar, dolar_intercambio, euro, ipc, utm, imacec, tpm, tasa_desempleo, bitcoin) {
    do {
        return `
        <td>${todoResultados.uf.nombre}</td>
        <td>$ ${todoResultados.uf.valor}</td>
        <td>${todoResultados.uf.unidad_medida}</td>
        <td>${todoResultados.uf.fecha}</td>`
}   while (i < 5);
*/





/*
function apiFinanciera(){
    

    fetch("https://yfapi.net/v6/finance/quote/marketSummary?lang=es&region=ES", {
            method: "GET",
            headers: {"X-API-KEY": "9WT11N9AHEa2C2BpLurVQ4NjuuPh5kRC6YJyCp9B"}
        })
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
        //stringAPI()
      var divOut = document.getElementById('mostrarFinanciera');
      var todoResultados = datos.result;
      var txtOut = "";
      for (var k in todoResultados) {
        txtOut += `<b>${todoResultados[k].fullExchangeName}</b><br />`;
        txtOut += `email: ${todoResultados[k].exchangeTimezoneName}<br />`;
        txtOut += `Company: ${todoResultados[k].regularMarketChangePercent.raw}<br />`;
        //txtOut += `Skill: ${todoResultados[k].skill}<br />`;
        //txtOut += `Average: ${todoResultados[k].grades}<br />`;
        //txtOut += `<img src="${todoResultados[k].pic}"><hr />`;
      }
      divOut.innerHTML = txtOut;
    });

}
/*
function apiFinanciera(){
    

    fetch('https://www.hatchways.io/api/assessment/students')
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
        //stringAPI()
      var divOut = document.getElementById('mostrarFinanciera');
      var allStudents = datos.students;
      var txtOut = "";
      for (var k in allStudents) {
        txtOut += `<b>${allStudents[k].firstName}</b><br />`;
        txtOut += `email: ${allStudents[k].email}<br />`;
        txtOut += `Company: ${allStudents[k].company}<br />`;
        txtOut += `Skill: ${allStudents[k].skill}<br />`;
        txtOut += `Average: ${allStudents[k].grades}<br />`;
        txtOut += `<img src="${allStudents[k].pic}"><hr />`;
      }
      divOut.innerHTML = txtOut;
    });

}






function stringAPI(){
    return `
            <div class="card fondo">
                <div class="card-body">
                    <h5 class="card-title">Invierte con nosotros</h5>
                    <p class="card-text">Y sabrás lo genial que es generar más ingresos a nuestros accionistas, con tú dinero.</p>
                    <a href="./inversion.html" class="btn btn-primary">Haz clic aquí</a>
                </div>
            </div>`
}
/*function apiFinanciera(){
    

    $("#botonAPI").click(function(event){
        fetch("https://yfapi.net/v6/finance/quote/marketSummary?lang=es&region=ES", {
            method: "GET",
            headers: {"X-API-KEY": "9WT11N9AHEa2C2BpLurVQ4NjuuPh5kRC6YJyCp9B"}
        })
        .then((resp) => resp.json())
        .then(function(data) {
            //let asd=$("#mostrarFinanciera")
            console.log(data.exange)
            console.log(data);
        })
        .catch(alert("Ohh, algo alió mal"))
})
    $("#mostrarFinanciera").append(stringAPI())
    
}


function stringAPI(){
    return `
            <div class="card fondo">
                <div class="card-body">
                    <h5 class="card-title">Invierte con nosotros</h5>
                    <p class="card-text">Y sabrás lo genial que es generar más ingresos a nuestros accionistas, con tú dinero.</p>
                    <a href="./inversion.html" class="btn btn-primary">Haz clic aquí</a>
                </div>
            </div>`
}




function apiFinanciera(){

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('mostrarFinanciera');
const url = 'https://yfapi.net/v6/finance/quote/marketSummary?lang=es&region=ES';

fetch(url, {
            method: "GET",
            headers: {"X-API-KEY": "9WT11N9AHEa2C2BpLurVQ4NjuuPh5kRC6YJyCp9B"}
        })
.then((resp) => resp.json())
.then(function(data) {

    /*
  let financiera = data.results;
  return financiera.map(function(bolsa) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = bolsa.picture.medium;
    span.innerHTML = `${bolsa.ticker} ${bolsa.sentiment_score}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});
}



        fetch("https://yfapi.net/v6/finance/quote/marketSummary?lang=es&region=ES", {
            method: "GET",
            headers: {"X-API-KEY": "9WT11N9AHEa2C2BpLurVQ4NjuuPh5kRC6YJyCp9B"}
        })
        .then(respuesta => respuesta.json())
        .then(respuestaDecodificada => {
            console.log(respuestaDecodificada);
        })*/