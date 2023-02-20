$.fn.updateViewportVisibility = function() {
    if ($(this).hasClass("visible")) {
        return;
    }
    
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
        if ($(this).attr("aos-delay") != null && $(this).attr("aos-delay") != "") {
            var delay = $(this).attr("aos-delay");
            $(this).css("transition-delay", delay + "ms");
        }

        $(this).removeClass("invisible");
        $(this).addClass("visible");
    }
}

// Vars
var animatedElements = $("[aos]");
var content = $(".content");

$("#mobile-nav-cross").on("click", function() {
    if (!content.hasClass("hidden")) {
        if (!$(animatedElements[i]).hasClass("visible")) {
            $(animatedElements[i]).updateViewportVisibility();
        }
    }
});

$("#nav-hamburger").click(function() {
    for (var i = 0; i < animatedElements.length; i++) {
        $(animatedElements[i]).updateViewportVisibility();
    }
});

$(document).ready(function() {
    animatedElements = $("[aos]");

    for (var i = 0; i < animatedElements.length; i++) {
        $(animatedElements[i]).updateViewportVisibility();
    }
});

// Update visibility for AOS elements
$(window).scroll(function () {
    for (var i = 0; i < animatedElements.length; i++) {
        if (!$(animatedElements[i]).hasClass("visible")) {
            $(animatedElements[i]).updateViewportVisibility();
        }
    }
});