$(function () {

    $('#nous_link').click(function(e){
        e.preventDefault()
        var page = $(".AboutTop"); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({scrollTop: $(page).offset().top - 110}, speed); // Go
        return false;
    });


    $('#le_gîte_link').click(function(e){
        e.preventDefault()
        var page = $(".GiteTop"); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({scrollTop: $(page).offset().top - 110}, speed); // Go
        return false;
    });

    $('#alentours_link').click(function(e){
        e.preventDefault()
        var page = $(".AlentoursTop"); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({scrollTop: $(page).offset().top - 110}, speed); // Go
        return false;
    });

    $('#tarifs_link').click(function(e){
        e.preventDefault()
        var page = $(".TarifsTop"); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({scrollTop: $(page).offset().top - 110}, speed); // Go
        return false;
    });

    $('#contact_link').click(function(e){
        e.preventDefault()
        var page = $(".ContactTop"); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({scrollTop: $(page).offset().top - 110}, speed); // Go
        return false;
    });


    $('.nav-link').on('click',function() {
        $('.navbar-collapse').collapse('hide');
    });

    //Gallery
    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});