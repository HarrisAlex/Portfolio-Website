class Project {
    constructor(title, subtitle, description, url, thumbnail, thumbnailWidth, thumbnailHeight, thumbnailAltText) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.url = url;
        this.thumbnail = thumbnail;
        this.thumbnailWidth = thumbnailWidth;
        this.thumbnailHeight = thumbnailHeight;
        this.thumbnailAltText = thumbnailAltText;
    }

    title = "Project Title";
    subtitle = "Project Subtitle";
    description = "Project description";
    url = "projects.html";
    thumbnail = "images/Portrait.webp";
    thumbnailWidth = "200";
    thumbnailHeight = "200";
    thumbnailAltText = "Project thumbnail alt text";
}

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

var inGameComputerProject = new Project(
    "In-Game Computer",
    "Fully functional computer within a video game for story purposes",
    "",
    "#",
    "https://i0.wp.com/among-us.me/wp-content/uploads/2021/09/90-130cm-Among-Us-Long-Pillow-Cushion-Sleepng-Pillow-Animal-Doll-Kawaii-Figure-Peluche-Christmas-Gift.jpg_640x640.jpg?fit=640%2C640&ssl=1",
    "In-Game Computer"
)

function GenerateProjectThumbnail(project) {
    var card = document.createElement("div");
    $(card).addClass("card");
    $(card).attr("aos", "fade slow slide-up far");

    var content = document.createElement("div");
    $(content).addClass("card-content");
    card.append(content);

    var titles = document.createElement("div");
    $(titles).addClass("card-copy-titles");
    content.append(titles);

    var title = document.createElement("h2");
    title.innerHTML = project.title;
    titles.append(title);

    var subtitle = document.createElement("h3");
    subtitle.innerHTML = project.subtitle;
    $(subtitle).addClass("understated");
    titles.append(subtitle);

    var descriptionContainer = document.createElement("div");
    $(descriptionContainer).addClass("card-copy-description");
    content.append(descriptionContainer);

    var description = document.createElement("p");
    description.innerHTML = project.description;
    descriptionContainer.append(description);
    
    var learnMoreButton = learnMoreButton = document.createElement("a");
    learnMoreButton.innerHTML = "Learn more";
    learnMoreButton.href = project.url;
    $(learnMoreButton).addClass("button");

    content.append(learnMoreButton);

    var mobileThumbnail = document.createElement("div");
    $(mobileThumbnail).addClass("card-background");
    $(mobileThumbnail).css("background-image", "url(" + project.thumbnail + ")");
    card.append(mobileThumbnail);

    $("#projects-container").append(card);

    $(card).on("click", function() {HandleToggleDescription(descriptionContainer, mobileThumbnail)});
}

GenerateProjectThumbnail(cityAlleyProject);
GenerateProjectThumbnail(creepyHotelHallway);
GenerateProjectThumbnail(horrorGameMenuProject);
GenerateProjectThumbnail(inGameComputerProject);

var cardDescriptions = $(".card-copy-description");
var cardBackgrounds = $(".card-background");

function HandleToggleDescription(description, background) {
    $(description).toggleClass("hidden");
    $(background).toggleClass("hidden");
}

for (var i = 0; i < cardDescriptions.length; i++) {
    $(cardDescriptions[i]).addClass("hidden");
}

for (var i = 0; i < cardBackgrounds.length; i++) {
    $(cardBackgrounds[i]).removeClass("hidden");
}

$(window).resize(function() {
    for (var i = 0; i < cardDescriptions.length; i++) {
        $(cardDescriptions[i]).addClass("hidden");
    }

    for (var i = 0; i < cardBackgrounds.length; i++) {
        $(cardBackgrounds[i]).removeClass("hidden");
    }
});