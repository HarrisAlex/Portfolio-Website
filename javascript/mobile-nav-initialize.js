if ($(window).outerWidth() < 721) {
    if (document.referrer != "") {
        var url = new URL(document.referrer);

        //127.0.0.1 comparison used for local testing, remove when deploying
        if (url.hostname === "alexharris.design" || url.hostname === "127.0.0.1") {
            $("#mobile-nav-cross").addClass("notransition");
            $("#mobile-nav-cross").addClass("visible");
            $("#mobile-nav-cross").removeClass("notransition");

            $("#mobile-nav-logo").addClass("notransition");
            $("#mobile-nav-logo").addClass("visible");
            $("#mobile-nav-logo").removeClass("notransition");

            $("#mobile-nav-divider").addClass("notransition");
            $("#mobile-nav-divider").addClass("visible");
            $("#mobile-nav-divider").removeClass("notransition");
        }
    }
}