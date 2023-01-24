export class Project {
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

export function CreateProjectCard(project, parent) {
    var card = document.createElement("div");
    $(card).addClass("card");
    $(card).attr("aos", "fade slow slide-up far");

    var content = document.createElement("div");
    $(content).addClass("card-content");
    card.append(content);

    var titles = document.createElement("div");
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
    $(description).addClass("card-description");
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

    $(card).on("click", function() {HandleToggleDescription(descriptionContainer, mobileThumbnail)});

    return card;
}