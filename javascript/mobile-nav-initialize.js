if ($(window).outerWidth() < 721) {
    $("#mobile-nav").addClass("notransition");
    $("#mobile-nav").addClass("active");
    $("#mobile-nav").offset();
    $("#mobile-nav").removeClass("notransition");

    $(".content").css({"height": "calc(100vh - 2.6rem)", "overflow-y" : "hidden"});

    if (document.referrer != "") {
        var url = new URL(document.referrer);

        //127.0.0.1 comparison used for local testing, remove when deploying
        if (url.hostname === "alexharris.design" || url.hostname === "127.0.0.1") {
            $("#mobile-nav-cross").addClass("visible");

            $("#mobile-nav-logo").addClass("visible");

            $("#mobile-nav-divider").addClass("visible");
        }
    }
}