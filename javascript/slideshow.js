import { CreateProjectCard } from "./modules/project-card.js";
import { cityAlleyProject, creepyHotelHallway, coffeeShopWebsite } from "./projects-data.js";

var slideshowWrapper = $("#slideshow-wrapper");
var cards = [];
cards.push(CreateProjectCard(cityAlleyProject, slideshowWrapper));
cards.push(CreateProjectCard(creepyHotelHallway, slideshowWrapper));
cards.push(CreateProjectCard(coffeeShopWebsite, slideshowWrapper));

// Slideshow
var lastSlide = 1;
var slideshowButtons = $(".slideshow-button");

for (var i = 0; i < slideshowButtons.length; i++) {
    let index = i + 1;
    $(slideshowButtons[i]).on("click", function() {
        HandleChangeSlide(index);
        console.log(index);
    });
}

for (var i = 0; i < cards.length; i++) {
    $(cards[i]).click(function() {
        HandleToggleDescription(i);
    });
}
var slideDescriptions = $(".card-copy-description");
var slideBackgrounds = $(".card-background");

function HandleChangeSlide(number) {
    if (currentTimeoutID !== null) {
        clearTimeout(currentTimeoutID);
    }
    ChangeSlide(number);
}

function ChangeSlide(number) {
    CloseDescription(lastSlide);

    // Position slide   
    $("#slideshow-wrapper").css({"transform" : "translateX(-" + (((number - 1) * $(".card").outerWidth()) + (160 * (number - 0.5))) + "px)"});

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

$(document).ready(function() {
    ChangeSlide(1);
});