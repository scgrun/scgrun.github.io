requirejs.config({
    baseUrl: "/assets/",

    shim: {
        bootstrap: {
            deps: ["jquery"],
            exports: "bootstrap"
        },
        swiper: {
            deps: ["jquery"],
            exports: "Swiper"
        }
    },

    paths: {
        page: "scripts/page",
        vendor: "vendor/",
        jquery: "vendor/jquery/dist/jquery.min",
        swiper: "vendor/swiper/swiper.jquery.min",
        bootstrap: "vendor/bootstrap/dist/js/bootstrap.min"
    }

});
