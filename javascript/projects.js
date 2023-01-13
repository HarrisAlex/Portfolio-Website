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

function GenerateProjectThumbnail(project) {
    var card = document.createElement("div");
    $(card).addClass("card");
    $(card).attr("aos", "horizontal-grow slow");

    var content = document.createElement("div");
    $(content).addClass("card-content");
    card.append(content);

    var copy = document.createElement("div");
    $(copy).addClass("card-copy");
    content.append(copy);

    var titles = document.createElement("div");
    $(titles).addClass("card-copy-titles");
    copy.append(titles);

    var title = document.createElement("h3");
    title.innerHTML = project.title;
    titles.append(title);

    var subtitle = document.createElement("h6");
    subtitle.innerHTML = project.subtitle;
    titles.append(subtitle);

    var descriptionContainer = document.createElement("div");
    $(descriptionContainer).addClass("card-copy-description");
    copy.append(descriptionContainer);

    var description = document.createElement("p");
    description.innerHTML = project.description;
    descriptionContainer.append(description);
    
    var learnMoreButton = learnMoreButton = document.createElement("div");
    learnMoreButton.innerHTML = "Learn more";
    $(learnMoreButton).addClass("button");

    copy.append(learnMoreButton);

    var thumbnailContainer = document.createElement("div");
    $(thumbnailContainer).addClass("card-thumbnail-container");
    content.append(thumbnailContainer);

    var thumbnail = document.createElement("img");
    thumbnail.src = project.thumbnail;
    thumbnail.width = project.thumbnailWidth;
    thumbnail.height = project.thumbnailHeight;
    thumbnailContainer.append(thumbnail);

    var mobileThumbnail = document.createElement("div");
    $(mobileThumbnail).addClass("card-background");
    $(mobileThumbnail).css("background-image", "url(" + project.thumbnail + ")");
    card.append(mobileThumbnail);

    $("#projects-container").append(card);

    $(card).on("click", function() {HandleToggleDescription(descriptionContainer, mobileThumbnail)});
}

var project = new Project(
    "Among Us", 
    "Deceive your friends", 
    "Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing.",
    "#",
    "https://i0.wp.com/among-us.me/wp-content/uploads/2021/09/90-130cm-Among-Us-Long-Pillow-Cushion-Sleepng-Pillow-Animal-Doll-Kawaii-Figure-Peluche-Christmas-Gift.jpg_640x640.jpg?fit=640%2C640&ssl=1",
    "LinkedIn Logo");

GenerateProjectThumbnail(project);
GenerateProjectThumbnail(project);
GenerateProjectThumbnail(project);
GenerateProjectThumbnail(project);
GenerateProjectThumbnail(project);
GenerateProjectThumbnail(project);

var cardDescriptions = $(".card-copy-description");
var cardBackgrounds = $(".card-background");

function IsOnMobile() {
    return $(window).outerWidth() < 721;
}

if (IsOnMobile()) {
    for (var i = 0; i < cardDescriptions.length; i++) {
        $(cardDescriptions[i]).addClass("hidden");
    }

    for (var i = 0; i < cardBackgrounds.length; i++) {
        $(cardBackgrounds[i]).removeClass("hidden");
    }
}

$(window).resize(function() {
    if (IsOnMobile()) {
        for (var i = 0; i < cardDescriptions.length; i++) {
            $(cardDescriptions[i]).addClass("hidden");
        }
    
        for (var i = 0; i < cardBackgrounds.length; i++) {
            $(cardBackgrounds[i]).removeClass("hidden");
        }
    }
});

function HandleToggleDescription(description, background) {
    if (!IsOnMobile()) {
        return;
    }

    if ($(description).hasClass("hidden")) {
        OpenDescription(description, background);
    } else {
        CloseDescription(description, background);
    }
}

function OpenDescription(description, background) {
    $(description).removeClass("hidden");
    $(background).addClass("hidden");
}

function CloseDescription(description, background) {
    $(description).addClass("hidden");
    $(background).removeClass("hidden");
}