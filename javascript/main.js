var content = $(".content");

var isNavLoaded = false;
// Load nav and footer
$("nav").load("/templates/nav.html", function() { isNavLoaded = true; SetActiveNavLink(); });
$("#mobile-nav").load("/templates/mobile-nav.html");
$("footer").load("/templates/footer.html");

// Check if on mobile device
function IsOnMobile() {
    return $(window).outerWidth() < 721;
}

function OpenMobileNav() {
    $("#mobile-nav").addClass("active");
    content.css({"height": "calc(100vh - 2.6rem)", "overflow-y" : "hidden"});

    $("#mobile-nav-cross").addClass("visible");
    $("#mobile-nav-cross").removeClass("invisible");
    $("#mobile-nav-logo").addClass("visible");
    $("#mobile-nav-logo").removeClass("invisible");
    $("#mobile-nav-divider").addClass("visible");
    $("#mobile-nav-divider").removeClass("invisible");
}

function CloseMobileNav() {
    $("#mobile-nav").removeClass("active");
    content.css({"height": "", "overflow-y" : ""});

    $("#mobile-nav-cross").removeClass("visible");
    $("#mobile-nav-cross").addClass("invisible");
    $("#mobile-nav-logo").removeClass("visible");
    $("#mobile-nav-logo").addClass("invisible");
    $("#mobile-nav-divider").removeClass("visible");
    $("#mobile-nav-divider").addClass("invisible");
}

// Wait for page to load before showing content
$(document).ready(function () {
    content.removeClass("hidden");

    if (isNavLoaded)
        SetActiveNavLink();

    // Open mobile nav if coming from another page on the site
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

function SetActiveNavLink() {
// Set active nav link
    switch (window.location.pathname) {
        case "/":
        case "/index.html":
            $("#nav-home-link").addClass("active");
            break;
        case "/projects.html":
            $("#nav-projects-link").addClass("active");
            break;
        case "/contact":
        case "/contact.html":
            $("#nav-contact-link").addClass("active");
            break;
    }

    if (window.location.pathname.includes("projects")) {
        $("#nav-projects-link").addClass("active");
    }
}

// Open mobile nav if coming from another page on the site
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