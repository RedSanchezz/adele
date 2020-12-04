$(".slider__photos").slick({
    prevArrow: '<img src="img/arrow-left.png" alt="" class="real-man__slider-arrow-left">',
    nextArrow: '<img src="img/arrow-right.png" alt="" class="real-man__slider-arrow-right">',
    fade: true,
    asNavFor: ".slider__info",
    dots: true,
    appendDots: ".real-man__sliders-dots",

});
$(".slider__info").slick({
    arrows: false,
    fade: true,
    asNavFor: ".slider__photos",
});
$(".testimonials-slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".testimonials-slider__dots",
});