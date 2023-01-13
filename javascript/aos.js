// Vars
var animatedElements;
var content = $(".content");

$("#mobile-nav-cross").on("click", function() {
    if (!content.hasClass("hidden")) {
        for (var i = 0; i < animatedElements.length; i++) {
            $(animatedElements[i]).updateViewportVisibility();
        }
    }
});

// Initialize visibility for AOS elements
$(document).ready(function() {
    animatedElements = $("[aos]");

    for (var i = 0; i < animatedElements.length; i++) {
            $(animatedElements[i]).updateViewportVisibility();
    }
});

setInterval(function() {

}, 200);

// Update visibility for AOS elements
$(window).scroll(function () {
    for (var i = 0; i < animatedElements.length; i++) {
        if (!$(animatedElements[i]).hasClass("visible")) {
            $(animatedElements[i]).updateViewportVisibility();
        }
    }
});

$.fn.updateViewportVisibility = function() {
    $(this).addClass("invisible");

    if ($(this).closest(".content").length > 0) {
        if (content.hasClass("hidden")) {
            if ($(window).outerWidth() < 721) {
                return;
            }
        }
    }

    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    if (viewportTop > 60) {
        viewportTop += $(window).outerHeight() * 0.1;
    }

    if (Math.abs(viewportBottom - $(document).height()) > 60) {
        viewportBottom -= $(window).outerHeight() * 0.1;
    }

    if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).removeClass("invisible");
        $(this).addClass("visible");
    }
}