// Slideshow
var lastSlide = 1;
var slideshowButtons = $(".slideshow-button");
var slideDescriptions = $(".slide-copy-description");
var slideBackgrounds = $(".slide-background");

function HandleChangeSlide(number) {
    if (currentTimeoutID !== null) {
        clearTimeout(currentTimeoutID);
    }
    ChangeSlide(number);
}

function ChangeSlide(number) {
    // Position slide   
    CloseDescription(lastSlide);

    $("#slideshow-wrapper").css({"transform" : "translateX(-" + (number - 1) * $(".slide").outerWidth() + "px)"});

    for (var i = 0; i < slideshowButtons.length; i++) {
        $(slideshowButtons[i]).removeClass("active");
    }

    $(slideshowButtons[number - 1]).addClass("active");

    lastSlide = number;
}

var currentTimeoutID = setTimeout(NextSlide, 8000);

function NextSlide() {
    var nextSlide;

    if (lastSlide === 3) {
        nextSlide = 1;
    } else {
        nextSlide = lastSlide + 1;
    }

    ChangeSlide(nextSlide);
    currentTimeoutID = setTimeout(NextSlide, 8000);
}

//Mobile
function IsOnMobile() {
    return $(window).outerWidth() < 721;
}

// Mobile nav
function OpenMobileNav() {
    $("#mobile-nav").addClass("active");
    $(".content").css({"height": "100vh", "overflow-y" : "hidden"});
    $(".content").addClass("hidden");
}

function CloseMobileNav() {
    $("#mobile-nav").removeClass("active");
    $(".content").css({"height": "", "overflow-y" : ""});
    $(".content").removeClass("hidden");
}

// Mobile slideshow
function HandleToggleDescription(number) {
    if (!IsOnMobile()) {
        return;
    }

    if ($(slideDescriptions[number - 1]).hasClass("hidden")) {
        OpenDescription(number);
    } else {
        CloseDescription(number);
    }
}

function OpenDescription(number) {
    $(slideDescriptions[number - 1]).removeClass("hidden");
    $(slideBackgrounds[number - 1]).addClass("hidden");
}

function CloseDescription(number) {
    $(slideDescriptions[number - 1]).addClass("hidden");
    $(slideBackgrounds[number - 1]).removeClass("hidden");
}

$(window).resize(function() {
    ChangeSlide(lastSlide);
});

ChangeSlide(1);

var content = $(".content");
content.addClass("hidden");

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