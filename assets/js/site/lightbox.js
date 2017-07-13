$(document).ready(function () {
    openLight();
});

function get_nossa_galeria(casa) {
    if (casa) {
        $.ajax({
            url: SITE_URL + LANG + '/nossas_casas/get_nossa_casa/' + casa,
            dataType: 'json',
            success: function (obj_galeria) {
                if (obj_galeria) {
                    $('#bx-conteudo-galeria').html(obj_galeria.html);
                    openLight();
                    galeria();
                    itens();
                    window.scrollTo(0, 0);
                }
            }
        });
    } else {
        $('#bx-conteudo-galeria').html('');
    }
}

function openLight() {
    $(".thumb:first").addClass('active');
    $('.col-galeria, .fotos').click(function () {
        $('.overlay').addClass('show');
        $('.rol-lightbox').addClass('show');
    });
    $(document).on('click', '.bt-fechar, .overlay', function () {
        $('.overlay').removeClass('show');
        $('.rol-lightbox').removeClass('show');
    });
}

function itens() {
    $('.thumb').click(function () {
        $('.thumb').removeClass('active');
        $(this).addClass('active');
    });
}

function galeria() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        dots: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        dots: false,
        arrows: true,
        infinite: false,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true
    });
}

function get_galeria_obra(mes) {
//    alert(mes);
    if (mes) {
        $.ajax({
            url: SITE_URL + LANG + '/sua_obra/get_galeria/' + mes,
            dataType: 'json',
            success: function (obj_galeria) {
                if (obj_galeria) {
                    $('#bx-conteudo-galeria').html(obj_galeria.html);
                    openLight();
                    galeria();
                    itens();
                }
            }
        });
    } else {
        $('#bx-conteudo-galeria').html('');
    }
}