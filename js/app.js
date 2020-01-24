$(document).ready(function(){
    
    /* Cambio de color del Navbar */
    var button = $('.mi-nav').find('button');

    button.click(function() {

        var status = $(this).attr('data-status');

        if(status === "x") {
            $('.mi-nav').removeClass('transparente').addClass('color');
            $(this).attr('data-status', 'y');
        } else {
            $('.mi-nav').removeClass('color').addClass('transparente');
            $(this).attr('data-status', 'x');
        }

    });

    /* Redireccionamiento */
    var $btnRedirect = $('.redirec');

    $btnRedirect.click(function(){
        var id = $(this).attr('id');
        // console.log(id);
        setTimeout(() => {
            $(location).attr('href', `${id}.html`);
        }, 1000);
    });

    /* Redireccionamiento Next-Proyect */
    var next =  $('.footer').attr('data-next');
    
    $('.footer').click(function(){
        setTimeout(() => {
            $(location).attr('href', `${next}.html`);
        }, 1000);
    }); 
    
    /*  Retirar loading */
    setTimeout(() => {
        $('.spinner').fadeOut(300, ( ) => {
            $(this).remove();
        });

        var item = $('#multiscroll').find('.ms-right').find('.contenido');
        setTimeout(() => {
            $('.loading').addClass('hiden');     
            item.find('.tools').addClass('animated slideInLeft');
            item.find('.display-4').addClass('animated slideInRight');
            item.find('p').addClass('animated slideInLeft');
            item.find('button').addClass('animated slideInUp');
            
        }, 1000);
    }, 5000);

    /* Ejecutamos el plugin de animación*/
    AOS.init({
    });
    


});



