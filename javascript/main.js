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
    $("body").css({"height": "100vh", "overflow-y" : "hidden"});
}

function CloseMobileNav() {
    $("#mobile-nav").removeClass("active");
    $("body").css({"height": "", "overflow-y" : ""});
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