export function CreateMobileNavbar(container) {
    var logo = $('<svg id="mobile-nav-logo" aos="fade slow fire-multiple" aos-offset="1000" id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000.15 567.46"><polygon points=".43 567.46 218.23 0 289.91 0 507.7 567.46 430.88 567.46 253.62 70.13 74.68 567.46 .43 567.46"/><polygon points="867.15 0 867.15 253.73 575.15 253.73 575.15 0 508.42 0 508.15 567.46 575.15 567.46 575.15 313.73 867.15 313.73 867.15 567.46 933.15 567.46 933.15 0 867.15 0"/></svg>');   
    $(container).append(logo);

    $(container).append('<div id="mobile-nav-divider" class="divider" aos="horizontal-grow slow fire-multiple" aos-offset="1000"></div>');
    
    var links = $('<div id="mobile-nav-link-list"></div>');
    $(links).append('<a id="mobile-nav-home-link" href="/index.html" class="mobile-nav-link">Home</a>');
    $(links).append('<a id="mobile-nav-projects-link" href="/projects.html" class="mobile-nav-link">Projects</a>');
    $(links).append('<a id="mobile-nav-contact-link" href="/contact.html" class="mobile-nav-link">Contact</a>');
    $(container).append(links);

    var cross = $('<svg id="mobile-nav-cross" aos="fade slow" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 880"><line x1="40" y1="40" x2="840" y2="840"/><line x1="40.9" y1="840" x2="839.1" y2="40"/></svg>');
    $(container).append(cross);
}