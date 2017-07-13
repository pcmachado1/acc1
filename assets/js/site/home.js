$(document).ready(function () {
    openLightbox();
    carouselBanner();
});

function openLightbox() {
    $('#overlay').addClass('show');
    $('#dialog-form').addClass('show');
    $('.fechar-mensagem, #overlay').click(function () {
        $('#overlay').removeClass('show');
        $('#dialog-form').removeClass('show');
    });
}

function carouselBanner() {
    $('#banners').slick({
        dots: true,
        responsive: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear'
    });
}