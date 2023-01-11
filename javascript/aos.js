// Vars
var animatedElements = $("[aos]");
var content = $(".content");

$("#mobile-nav-cross").on("click", function() {
    if (!content.hasClass("hidden")) {
        for (var i = 0; i < animatedElements.length; i++) {
            $(animatedElements[i]).updateViewportVisibility();
        }
    }
});

// Initialize visibility for AOS elements
$(window).ready(function() {
    for (var i = 0; i < animatedElements.length; i++) {
        $(animatedElements[i]).updateViewportVisibility();
    }
});

// Update visibility for AOS elements
$(window).scroll(function () {
    for (var i = 0; i < animatedElements.length; i++) {
        $(animatedElements[i]).updateViewportVisibility();
    }
});

$.fn.updateViewportVisibility = function() {
    if ($(this).hasClass("visible")) {
        return;
    } else {
        $(this).addClass("invisible");
    }

    if ($(this).closest(".content").length > 0) {
        if (content.hasClass("hidden"))
        {
            return;
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
        if ($(this).hasClass("invisible")) {
            $(this).removeClass("invisible");
            $(this).addClass("visible");
        }
    }
}