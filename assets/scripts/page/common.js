define(["jquery"], function($) {

    // 激活导航条
    var $body = $("body"),
        $mainNav = $("#mainNav"),
        pathname = location.pathname,
        module = pathname.replace(/\//g, ""),
        $currentNavLi;

    module = module ? module : "home";

    $currentNavLi = $mainNav.find("." + module);

    $currentNavLi.addClass("active");

    $currentNavLi.find("a").attr("href", "javascript:void(0);");

    // 设置版权时间
    var $footer = $("footer"),
        $copyrightYear = $footer.find(".copyright-year");

    $copyrightYear.text((new Date()).getFullYear());
    
    console.log("Powered by JackyCoder!\nWebsite:%s\nEmail:%s\nQQ:%s", 
        "http://www.lnkfile.com", 
        "jacky_coder@163.com",
        "295687784");
});