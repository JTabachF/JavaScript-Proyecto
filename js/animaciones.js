//animación Tarjetas
$("#botonTarjeta").click(function(event){
    $("#eliminarMain").slideUp(500);
    $("#solicitarTarjetaa").css({'border-style':'solid','border-color':'black'});
});

function clickAnimacionTarjeta1(){
$('#tarjetaMod2').slideUp(200);
$("#tarjetaMod3").slideUp(200);
$("#tarjetaMod1").css({'border-style':'groove','border-color':'black'});
setTimeout(() => {
    if(confirm("Está seguro de la selección de tarjeta?")==true){
        alert("Su tarjeta ha sido aprobada, por favor dirigirse a una sucursal a retirarla. Gracias por su preferencia")
    }else{
        alert("Su tarjeta ha sido rechazada, intentelo en 60 días más. Gracias por su preferencia")
    }
}, 300); 
}
function clickAnimacionTarjeta2(){
$('#tarjetaMod1').slideUp(200);
$("#tarjetaMod3").slideUp(200);
$("#tarjetaMod2").css({'border-style':'groove','border-color':'black'});
setTimeout(() => {
    if(confirm("Está seguro de la selección de tarjeta?")==true){
        alert("Su tarjeta ha sido aprobada, por favor dirigirse a una sucursal a retirarla. Gracias por su preferencia")
    }else{
        alert("Su tarjeta ha sido rechazada, intentelo en 60 días más. Gracias por su preferencia")
    }
}, 300); 
}
function clickAnimacionTarjeta3(){
$('#tarjetaMod1').slideUp(200);
$("#tarjetaMod2").slideUp(200);
$("#tarjetaMod3").css({'border-style':'groove','border-color':'black'});
setTimeout(() => {
    if(confirm("Está seguro de la selección de tarjeta?")==true){
        alert("Su tarjeta ha sido aprobada, por favor dirigirse a una sucursal a retirarla. Gracias por su preferencia")
    }else{
        alert("Su tarjeta ha sido rechazada, intentelo en 60 días más. Gracias por su preferencia")
    }
}, 300); 
}

function animacionCard1(){
    $('#tarjetaMod1').css({'opacity': '1'});
    $('#tarjetaMod2').css({'opacity': '0.5'});
    $('#tarjetaMod3').css({'opacity': '0.5'});
}
function animacionCard2(){
    $('#tarjetaMod1').css({'opacity': '0.5'});
    $('#tarjetaMod2').css({'opacity': '1'});
    $('#tarjetaMod3').css({'opacity': '0.5'});
}
function animacionCard3(){
    $('#tarjetaMod1').css({'opacity': '0.5'});
    $('#tarjetaMod2').css({'opacity': '0.5'});
    $('#tarjetaMod3').css({'opacity': '1'});
}

//Animaciones Index

$(".imgTamano").mouseover(function(){
    console.log("Funciona")
    $(".imgTamano").css({'transform': 'rotateY(180deg)'});
    $('.imgTamano').css({'transform-style': 'preserve-3d'});
})
$(".imgTamano").mouseout(function(){
    console.log("Funciona")
    $(".imgTamano").css({'transform': 'rotateY(0deg)'});
    $('.imgTamano').css({'transform-style': 'preserve-3d'});
})

//Animaciones Inversion
$("#botonInversion").click(function(event){
    $("#eliminarMain").slideUp(500);
    $("#solEv1").css({'border-style':'solid','border-color':'black'});
});

function animacionInv1(){
    $('#cardDep1').css({'opacity': '1'});
    $('#cardDep2').css({'opacity': '0.5'});
    $('#cardDep3').css({'opacity': '0.5'});
}
function animacionInv2(){
    $('#cardDep1').css({'opacity': '0.5'});
    $('#cardDep2').css({'opacity': '1'});
    $('#cardDep3').css({'opacity': '0.5'});
}
function animacionInv3(){
    $('#cardDep1').css({'opacity': '0.5'});
    $('#cardDep2').css({'opacity': '0.5'});
    $('#cardDep3').css({'opacity': '1'});
}
function clickAnimacionInv1(){
    $('#cardDep2').slideUp(200);
    $("#cardDep3").slideUp(200);
    $("#cardDep1").css({'border-style':'groove','border-color':'black'});
    setTimeout(() => {
        if(confirm("Está seguro de la selección de la inversión?")==true){
            alert("Su inversión ha sido cursada con éxito, por favor iniciar sesión en sucursal virtual para ratificar inversión. Gracias por su preferencia")
        }else{
            alert("Su inversión no se ha cursado con éxito, intentelo más tarde. Gracias por su preferencia")
        }
    }, 300); 
    }
function clickAnimacionInv2(){
    $('#cardDep1').slideUp(200);
    $("#cardDep3").slideUp(200);
    $("#cardDep2").css({'border-style':'groove','border-color':'black'});
    setTimeout(() => {
        if(confirm("Está seguro de la selección de la inversión?")==true){
            alert("Su inversión ha sido cursada con éxito, por favor iniciar sesión en sucursal virtual para ratificar inversión. Gracias por su preferencia")
        }else{
            alert("Su inversión no se ha cursado con éxito, intentelo más tarde. Gracias por su preferencia")
        }
    }, 300); 
    }
function clickAnimacionInv3(){
    $('#cardDep1').slideUp(200);
    $("#cardDep2").slideUp(200);
    $("#cardDep3").css({'border-style':'groove','border-color':'black'});
    setTimeout(() => {
        if(confirm("Está seguro de la selección de la inversión?")==true){
            alert("Su inversión ha sido cursada con éxito, por favor iniciar sesión en sucursal virtual para ratificar inversión. Gracias por su preferencia")
        }else{
            alert("Su inversión no se ha cursado con éxito, intentelo más tarde. Gracias por su preferencia")
        }
    }, 300); 
    }

//Animaciones Crédito

function clickSelecCredito(){
    $("#solicitarCredito").css({'border-style':'groove','border-color':'black'});
    setTimeout(() => {
        if(confirm("Está seguro de la selección del Crédito?")==true){
            alert("Su crédito ha sido aprobado, por favor dirigirse a una sucursal a retirarlo. Gracias por su preferencia")
        }else{
            alert("Su crédito ha sido rechazado, intentelo en 60 días más. Gracias por su preferencia")
        }
    }, 300); 
    }



