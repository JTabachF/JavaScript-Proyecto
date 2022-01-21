//animación Tarjetas
$("#botonTarjeta").click(function(event){
    $("#eliminarMain").slideUp(500);
    $("#solicitarTarjetaa").css({'border-style':'solid','border-color':'black'});
});

function clickAnimacion1(){
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
function clickAnimacion2(){
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
function clickAnimacion3(){
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




//function animImgIndexCard(){
//    $('.imgTamano').css({'transform': 'rotateY(360deg)'});
 //   $('.imgTamano').css({'transform-style': 'preserve-3d'});
//}