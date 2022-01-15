//animación Tarjetas
$("#botonTarjeta").click(function(event){
    $("#eliminarMain").slideUp(300);
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

function mouseoverAnimacion1(){
    $('#tarjetaMod1').css({'opacity': '1'});
    $('#tarjetaMod2').css({'opacity': '0.5'});
    $('#tarjetaMod3').css({'opacity': '0.5'});
}
function mouseoverAnimacion2(){
    $('#tarjetaMod1').css({'opacity': '0.5'});
    $('#tarjetaMod2').css({'opacity': '1'});
    $('#tarjetaMod3').css({'opacity': '0.5'});
}
function mouseoverAnimacion3(){
    $('#tarjetaMod1').css({'opacity': '0.5'});
    $('#tarjetaMod2').css({'opacity': '0.5'});
    $('#tarjetaMod3').css({'opacity': '1'});
}