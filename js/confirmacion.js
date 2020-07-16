function enviarDatos()
{
    var mensaje=document.getElementById("mensaje");

    mensaje.innerHTML="<center><img src='img/cargador gif.gif'></center>";

    $('.formulario').hide(); //ocultamos el formulario

     setInterval(enviarServidor,4000);

}

function enviarServidor()
{
    var nombre=''

    $.ajax({
       url:'http://icfnet.org/descargasCursos/2do/resultado.php',
       type: 'POST',
       data:{
           variable:nombre
       }
    }).done(function (respuestaServidor){

        $('#mensaje').html(respuestaServidor);

    });
}