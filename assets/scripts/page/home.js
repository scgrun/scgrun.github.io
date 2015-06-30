define(["jquery", "swiper"], function($, Swiper) {

    // 初始化轮播器(swiper)
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        effect: 'slide',
        autoplay: 4000
    });

});