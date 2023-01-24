import { Project, CreateProjectCard } from "./modules/project-card.js";

var cityAlleyProject = new Project(
    "City Alley", 
    "A dark, quiet alley", 
    "Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing.",
    "projects/city-alley.html",
    "images/projects/city-alley-preview.jpg",
    "City Alley Render"
);

var creepyHotelHallway = new Project(
    "Creepy Hotel Hallway", 
    "A creepy, dark hotel hallway", 
    "Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing.",
    "projects/creepy-hallway.html",
    "images/projects/creepy-hotel-hallway-preview.jpg",
    "Creepy Hotel Hallway Render"
);

var horrorGameMenuProject = new Project(
    "Horror Game Main Menu", 
    "A simple concept for a horror game's main menu", 
    "Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing.",
    "#",
    "images/projects/horror-game-menu-preview.jpg",
    "Horror Game Menu Concept"
);

var slideshowWrapper = $("#slideshow-wrapper");
var cards = [];
cards.push(CreateProjectCard(cityAlleyProject, slideshowWrapper));
cards.push(CreateProjectCard(creepyHotelHallway, slideshowWrapper));
cards.push(CreateProjectCard(horrorGameMenuProject, slideshowWrapper));

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
    // Position slide   
    CloseDescription(lastSlide);

    $("#slideshow-wrapper").css({"transform" : "translateX(-" + (number - 1) * $(".card").outerWidth() + "px)"});

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

ChangeSlide(1);