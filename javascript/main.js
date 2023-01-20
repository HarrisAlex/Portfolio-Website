var content = $(".content");

//Mobile
function IsOnMobile() {
    return $(window).outerWidth() < 721;
}

// Mobile nav
function OpenMobileNav() {
    $("#mobile-nav").addClass("active");
    content.css({"height": "calc(100vh - 2.6rem)", "overflow-y" : "hidden"});
}

function CloseMobileNav() {
    $("#mobile-nav").removeClass("active");
    content.css({"height": "", "overflow-y" : ""});
}

$(document).ready(function () {
    content.removeClass("hidden");
    if (IsOnMobile()) {    
        if (document.referrer != "") {
            var url = new URL(document.referrer);
    
            //127.0.0.1 comparison used for local testing, remove when deploying
            if (url.hostname === "alexharris.design" || url.hostname === "127.0.0.1") {
                $("#mobile-nav-cross").addClass("notransition");
                $("#mobile-nav-cross").offset();
                $("#mobile-nav-cross").removeClass("notransition");
    
                $("#mobile-nav-logo").addClass("notransition");
                $("#mobile-nav-logo").offset();
                $("#mobile-nav-logo").removeClass("notransition");
    
                $("#mobile-nav-divider").addClass("notransition");
                $("#mobile-nav-divider").offset();
                $("#mobile-nav-divider").removeClass("notransition");
            }
        }
    } 
});

if (IsOnMobile()) {
    if (document.referrer != "") {
        var url = new URL(document.referrer);

        //127.0.0.1 comparison used for local testing, remove when deploying
        if (url.hostname === "alexharris.design" || url.hostname === "127.0.0.1") {
            $("#mobile-nav").addClass("notransition");
            OpenMobileNav();
            $("#mobile-nav").offset();
            $("#mobile-nav").removeClass("notransition");

            CloseMobileNav();
        }
    }
} 