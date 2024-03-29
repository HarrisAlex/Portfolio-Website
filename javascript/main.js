import { storyForge, dungeonGenerator, shortcutManager, renderer } from "./projects-data.js";

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

window.smallScreen = function() {
    return $(window).outerWidth() < 721;
};

$("#nav-hamburger").click(function() {
    OpenMobileNav();
});

$("#mobile-nav-cross").click(function() {
    CloseMobileNav();
});

function OpenMobileNav() {
    $("#mobile-nav").addClass("active");
    lockScroll($("body"));
}

function CloseMobileNav() {
    $("#mobile-nav").removeClass("active");
    unlockScroll($("body"));
}

// Wait for page to load before showing content
$(document).ready(function () {
    // Open mobile nav if coming from another page on the site
    if (window.smallScreen()) {    
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

// Open mobile nav if coming from another page on the site
if (window.smallScreen()) {
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

$(".project-thumbnail").click(function() {
    openImageZoom($(this).attr("src"));
});

$("#close-image-zoom").click(function() {
    closeImageZoom();
});

$(".button[projectID]").click(function() {
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
    $("#close-modal").addClass("active");

    let count = project.thumbnails.length;

    if (count > 0) {
        project.thumbnails.map(function(thumbnail) {
            let image = $("<div class='image-container'><img src='" + thumbnail + "' class='project-thumbnail'></div>");

            image.click(function() {
                openImageZoom($(this).children("img").attr("src"));
            });

            $("#modal-images").append(image);
        });
    }

    lockScroll($("body").get(0));
}

$("#close-modal").click(function() {
    closeProjectModal();
});

function closeProjectModal() {
    $("#project-modal").addClass("inactive");
    $("#project-modal").removeClass("active");

    setTimeout(() => {
        $("#project-modal").removeClass("inactive");
        $("#close-modal").removeClass("active");
    }, 600);
    
    unlockScroll($("body").get(0));
}

function openImageZoom(image) {
    $.get(image.replace("-preview", "")).done(function() {
        $("#image-zoom").addClass("active");
        $("#image-zoom").children("img").attr("src", image.replace("-preview", ""));

        $("#image-zoom").children("img").on("load", function() {
            scaleImageZoom();
        });
    }).fail(function() {
        $("#image-zoom").addClass("active");
        $("#image-zoom").children("img").attr("src", image);

        $("#image-zoom").children("img").on("load", function() {
            scaleImageZoom();
        });
    });

    lockScroll($("body").get(0));
}

function closeImageZoom() {
    $("#image-zoom").removeClass("active");

    unlockScroll($("body").get(0));
}

function lockScroll(target) {
    if (window.mobileCheck()) {
        $(target).css("overflow-y", "hidden");
    } else {
        $(target).css({"overflow-y": "hidden",  "padding-right" : "7px"});
    }
}

function unlockScroll(target) {
    $(target).css({"overflow-y": "auto",  "padding-right" : "0px"});
}

$(window).resize(function() {
    scaleImageZoom();
});

let waypoints = {};
$.each($("[waypoint]"), function (indexInArray, valueOfElement) {
    waypoints[$(this).attr("waypoint")] = $(this);
});

let navlinks = [];
$.each($("a"), function (indexInArray, valueOfElement) {
    if ($(this).attr("destination") != null) {
        navlinks.push($(this));
    }
});

$.each(navlinks, function (indexInArray, valueOfElement) {
    $(this).click(function() {
        let offset = 0;
        let scroll = $(waypoints[$(this).attr("destination")]).offset().top;

        if ($(this).attr("destination") == "home") {
            offset = scroll;
        } else {
            offset = 50;
        }


        $("html, body").animate({
            scrollTop: scroll - offset
        }, 1000);

        if (window.smallScreen()) {
            CloseMobileNav();
        }
    });
});

$(window).scroll(function() {
    setActiveWaypoint();
});

function scaleImageZoom() {
    if ($("#image-zoom").hasClass("active")) {
        if ($("#image-zoom").children("img").height() > $(window).height()) {
            $("#image-zoom").children("img").addClass("height-centered");
        } else if ($("#image-zoom").children("img").width() > $(window).width()) {
            $("#image-zoom").children("img").removeClass("height-centered");
        }
    }
}

function setActiveWaypoint() {
    let closestWaypoint;
    let closestDistance = 1000000;

    $.each(waypoints, function (indexInArray, valueOfElement) {
        let distanceTop = Math.abs($(this).offset().top - $(window).scrollTop());
        let distanceBottom = Math.abs(($(this).offset().top + $(this).height()) - ($(window).scrollTop() + $(window).height()));

        if (distanceTop < closestDistance) {
            closestDistance = distanceTop;
            closestWaypoint = $(this).attr("waypoint");
        }

        if (distanceBottom < closestDistance) {
            closestDistance = distanceBottom;
            closestWaypoint = $(this).attr("waypoint");
        }
    });

    $.each(navlinks, function (indexInArray, valueOfElement) {
        if ($(this).attr("destination") == closestWaypoint) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

$("#contact-form").submit(function(event) {
    event.preventDefault();
    event.stopPropagation();

    let formData = new FormData($("#contact-form")[0]);

    $.ajax({
        type: "POST",
        url: $("#contact-form").attr("action"),
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            if (response.charAt(0) == "0") {
                contactFormSuccess();
            } else {
                contactFormFailure("Your message could not be sent due to invalid characters. Please try again.");
            }
            
        },
        error: function(response) {
            contactFormFailure("The server was unable to process your request. Please try again later.");
        }
    });
});

function contactFormSuccess() {
    $("#contact-subtitle").addClass("hidden");
    $("#contact-form").addClass("hidden");
    $("#contact-success").removeClass("hidden");
}

function contactFormFailure(failureText) {
    $("#contact-subtitle").addClass("hidden");
    $("#contact-form").addClass("hidden");

    $("#contact-failure").text(failureText);
    $("#contact-failure").removeClass("hidden");
}

setActiveWaypoint();