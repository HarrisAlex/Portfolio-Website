import { CreateFooter } from "./modules/footer.js";
import { CreateMobileNavbar } from "./modules/mobileNavbar.js";
import { CreateNavbar } from "./modules/navbar.js";
import { storyForge, dungeonGenerator, shortcutManager, renderer } from "./projects-data.js";

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
        case "/index":
        case "/index.html":
            $("#nav-home-link").addClass("active");
            $("#mobile-nav-home-link").addClass("active");
            break;
        case "/projects":
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

$("#name-animation").attr("style", "opacity: 0;");

// Add delay to name animation
$("#name-animation").ready(function() {
    setTimeout(function() { 
        $("#name-animation").attr("style", "opacity: 1;");
        $("#name-animation").get(0).play();
    }, 1000);
});

$(".project-thumbnail").click(function() {
    openImageZoom($(this).attr("src"));
});

$("#close-image-zoom").click(function() {
    closeImageZoom();
});

$(".learn-more").click(function() {
   openProjectModal(projects[$(this).attr("projectID")]);
});

const projects = {
    "storyforge": storyForge,
    "dungeonGenerator": dungeonGenerator,
    "shortcutManager": shortcutManager,
    "renderer": renderer
};

function openProjectModal(project) {
    $("#modal-title").html(project.title);
    $("#modal-description").html(project.description);
    $("#modal-images").empty();
    $("#project-modal").addClass("active");

    let count = project.thumbnails.length;

    if (count > 0) {
        project.thumbnails.map(function(thumbnail) {
            let image = $("<div class='image-container'><img src='" + thumbnail + "' class='project-thumbnail'></div>");

            image.click(function() {
                openImageZoom($(this).children("img").attr("src"));
            });
            
            image.children("img").on("load", function() {
                count--;

                if (count == 0) {
                    centerModal();
                }
            });

            $("#modal-images").append(image);
        });
    } else {
        centerModal();
    }

    lockScroll($("body").get(0));
}

$("#close-modal").click(function() {
    closeProjectModal();
});

function closeProjectModal() {
    $("#project-modal").removeClass("active");

    unlockScroll($("body").get(0));
}

function openImageZoom(image) {
    $("#image-zoom").addClass("active");
    $("#image-zoom").children("img").attr("src", image);

    lockScroll($("body").get(0));
}

function closeImageZoom() {
    $("#image-zoom").removeClass("active");

    unlockScroll($("body").get(0));
}

function lockScroll(target) {
    $(target).attr("style", "overflow-y: hidden; padding-right: 7px");
}

function unlockScroll(target) {
    $(target).attr("style", "");
}

$(window).resize(function() {
    centerModal();
});

function centerModal() {
    $("#modal-content").attr("style", "top: " + ((window.innerHeight / 2) - ($("#modal-content").outerHeight() / 2)) + "px;");
}