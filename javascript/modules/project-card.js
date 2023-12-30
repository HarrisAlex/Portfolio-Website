export function CreateProjectCard(project, parent) {
    var card = document.createElement("div");
    $(card).addClass("card");
    $(card).attr("aos", "fade slow slide-up far");

    var content = document.createElement("div");
    $(content).addClass("card-content");
    card.append(content);

    var titles = document.createElement("div");
    $(titles).addClass("card-title-container");
    content.append(titles);

    var title = document.createElement("p");
    title.innerHTML = project.title;
    $(title).addClass("card-title");
    titles.append(title);

    var subtitle = document.createElement("p");
    subtitle.innerHTML = project.subtitle;
    $(subtitle).addClass("understated card-subtitle");
    titles.append(subtitle);

    var description = document.createElement("p");
    $(description).addClass("card-description hidden");
    description.innerHTML = project.description;
    content.append(description);
    
    var learnMoreButton = learnMoreButton = document.createElement("a");
    learnMoreButton.innerHTML = "Learn more";
    learnMoreButton.href = project.url;
    $(learnMoreButton).addClass("button");

    content.append(learnMoreButton);

    var mobileThumbnail = document.createElement("div");
    $(mobileThumbnail).addClass("card-background");
    $(mobileThumbnail).css("background-image", "url(" + project.thumbnail + ")");
    card.append(mobileThumbnail);

    $(parent).append(card);

    $(card).on("click", function() {HandleToggleDescription(description, mobileThumbnail)});

    return card;
}

function HandleToggleDescription(description, background) {
    $(description).toggleClass("hidden");
    $(background).toggleClass("hidden");
}

var cardDescriptions = $(".card-description");
var cardBackgrounds = $(".card-background");

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