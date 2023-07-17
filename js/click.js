function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sectionPosition = section.getBoundingClientRect().top;
    var offsetPosition = window.pageYOffset + sectionPosition;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}