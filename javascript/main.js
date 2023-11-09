import { CreateFooter } from "./modules/footer.js";
import { CreateMobileNavbar } from "./modules/mobileNavbar.js";
import { CreateNavbar } from "./modules/navbar.js";

var content = $(".content");

// Check if on mobile device
function IsOnMobile() {
    return $(window).outerWidth() < 721;
}

function OpenMobileNav() {
    $("#mobile-nav").addClass("active");
    
    let scrollTop = document.documentElement.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft;

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function CloseMobileNav() {
    $("#mobile-nav").removeClass("active");
    
    window.onscroll = function() {};
}

CreateNavbar($("nav"));
$("#nav-hamburger").click(OpenMobileNav);

CreateMobileNavbar($("#mobile-nav"));
$("#mobile-nav-cross").click(CloseMobileNav);
CreateFooter($("footer"));

function SetActiveNavLink() {
    // Set active nav link
    switch (window.location.pathname) {
        case "/":
        case "/index.html":
            $("#nav-home-link").addClass("active");
            $("#mobile-nav-home-link").addClass("active");
            break;
        case "/projects.html":
            $("#nav-projects-link").addClass("active");
            $("#mobile-nav-projects-link").addClass("active");
            break;
        case "/contact":
        case "/contact.html":
            $("#nav-contact-link").addClass("active");
            $("#mobile-nav-contact-link").addClass("active");
            break;
    }

    if (window.location.pathname.includes("projects")) {
        $("#nav-projects-link").addClass("active");
    }
}

// Wait for page to load before showing content
$(document).ready(function () {
    content.removeClass("hidden");

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

    SetActiveNavLink();
});

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