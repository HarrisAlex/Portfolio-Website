export function CreateNavbar(container) {
    $(container).append('<svg id="nav-logo" aos="far slide-right slow" id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000.15 567.46"><polygon points=".43 567.46 218.23 0 289.91 0 507.7 567.46 430.88 567.46 253.62 70.13 74.68 567.46 .43 567.46"/><polygon points="867.15 0 867.15 253.73 575.15 253.73 575.15 0 508.42 0 508.15 567.46 575.15 567.46 575.15 313.73 867.15 313.73 867.15 567.46 933.15 567.46 933.15 0 867.15 0"/></svg>');
    
    var navLinkList = $('<div id="nav-link-list" aos="far slide-left slow"></div>');
    $(container).append(navLinkList);

    $(navLinkList).append('<a class="nav-link" href="/index.html" id="nav-home-link"><div class="nav-link-line"></div><p>Home</p></a>');
    $(navLinkList).append('<a class="nav-link" href="/projects.html" id="nav-projects-link"><div class="nav-link-line"></div><p>Projects</p></a>');
    $(navLinkList).append('<a class="nav-link" href="/contact.html" id="nav-contact-link"><div class="nav-link-line"></div><p>Contact</p></a>');

    $(container).append('<svg id="nav-hamburger" aos="far slide-left slow" onclick="OpenMobileNav()" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 966 723.24"><line x1="40" y1="40" x2="925.11" y2="40"></line><line x1="40.89" y1="361.62" x2="926" y2="361.62"></line><line x1="40.89" y1="683.24" x2="926" y2="683.24"></line></svg>');
}