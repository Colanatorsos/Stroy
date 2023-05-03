$(document).ready(function () {
    var owl = $('#home-slider');
    owl.owlCarousel({
        items: 1,
        dots: false,
    });
    owl.owlCarousel();
    $('.home__next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.home__prev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    })


    var owl = $('#feedback-slider');
    owl.owlCarousel({
        items: 3,
        dots: false,
    });
    owl.owlCarousel();
    $('.feedback__next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.feedback__prev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    })


    //инструкция к входу
    $('#open-login-popup').click(function (e) {
        e.preventDefault()
        $('.overlay').fadeIn(700)
        $('.login-popup').fadeIn(700)
    })
    $('.popup-close-btn').click(function () {
        $('.overlay').fadeOut(700)
        $('.login-popup').fadeOut(700)
        $('.reg-popup').fadeOut(700)
    })


    //инструкция к регу
    $('#open-reg-popup').click(function () {
        $('.reg-popup').fadeIn(700)
        $('.login-popup').fadeOut(700)
    })


    //инструкция к ошибке и спасибо за заказ
    // $('#error-popup-open').click(function (es) {
    //     es.preventDefault()
    //     $('.overlay').fadeIn(700)
    //     $('.order-alert').fadeIn(700)
    // })
});