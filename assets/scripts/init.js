$(function() {

    var $body = $("body"),
        pathname = location.pathname,
        module = pathname.replace(/\//g, "");

    module = module ? module : "home";

    // Create navigator
    $.ajax({
        url: "/fragments/nav.html",
        type: "GET",
        dataType: "html",
        cache: true,
        success: function(data) {
            var $nav = $(data);
            $nav.find("." + module).addClass("active");
            $body.prepend($nav);
        }
    });

    // Create footer
    $.ajax({
        url: "/fragments/footer.html",
        type: "GET",
        dataType: "html",
        cache: true,
        success: function(data) {
            var $footer = $(data);
            $footer.find(".copyright-year").text(new Date().getFullYear());
            $body.append($footer);
        }
    });

});