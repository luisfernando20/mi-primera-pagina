$(document).ready(opcionMenu);

var contador=1;
function opcionMenu()
{
    $('.iconoMenu').click(function(){

        //console.log("click")

        if(contador==1)
        {
            //el menu esta oculto y debe aparecer
            $('ul').animate({left:'5%'});
            contador=0;
        }
        else{
            //el menu esta visible y debe desaparecer
            $('ul').animate({left: '-95%'});
            contador=1
        }
    });
}