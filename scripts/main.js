window.onload = function () {
    sizeSections();
};
window.onresize = function () {
    sizeSections();
};
window.onscroll = function () {
    var pos = window.scrollY;
    if (pos > 50) {
        document.getElementsByTagName("nav")[0].classList.add("small-nav");
    }
    else {
        document.getElementsByTagName("nav")[0].classList.remove("small-nav");
    }
};
function sizeSections() {
    var sectionSize = 0.75;
    var elements = document.getElementsByClassName("sized-section");
    for (var index = 0; index < elements.length; index++) {
        var element = elements[index];
        element.style.height = window.innerHeight * sectionSize + "px";
    }
}
