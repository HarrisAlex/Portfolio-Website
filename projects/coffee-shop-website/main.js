$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).outerHeight();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).scroll(function () {
    var sectionOpenTransition = $(".section-open-transition");
    
    if (sectionOpenTransition.isInViewport())
    {
        sectionOpenTransition.addClass("visible");
    }
});