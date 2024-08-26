let contactFetch = $("#fetch-contact");
let projectFetch = $("#fetch-project");
let submitButton = $("#contact-modal-submit");

$(contactFetch).on("input", function() {
    if (isFormFinished(contactFetch)) {
        $(projectFetch).addClass("active");
    }
});

$(projectFetch).on("input", function() {
    if (isFormFinished(projectFetch)) {
        $(submitButton).addClass("active");
    }
});

$(submitButton).click(function() {
    let callback = $.post("prospect.php", $(contactFetch).serialize() + "&" + $(projectFetch).serialize());

    callback.done(function(data) {
        console.log(data);
    });
});

function isFormFinished(form) {
    let inputs = $(form).serializeArray();
    let total = inputs.length;

    inputs = inputs.filter(function(input) {
        return input.value !== "";
    });

    return inputs.length === total;
}