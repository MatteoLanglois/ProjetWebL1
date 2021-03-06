
(function($){

    /* Quand je clique sur l'icône hamburger je rajoute une classe au body */
    $('#burger_icon').click(function(e){
        e.preventDefault();
        $('contenu').toggleClass('move_menu');
    });

    /* Je veux pouvoir masquer le menu si on clique sur le cache */
    $('#site-cache').click(function(e){
        $('contenu').removeClass('move_menu');
    })

})(jQuery);