window.onload = function () {
    sizeSections()
}
window.onresize = function () {
    sizeSections()
}
window.onscroll = function() {
    const pos = window.scrollY
    if (pos > 50) {
        document.getElementsByTagName("nav")[0].classList.add("small-nav")
    } else {
        document.getElementsByTagName("nav")[0].classList.remove("small-nav")
    }
}

function sizeSections() {
    const sectionSize = 0.75
    let elements = document.getElementsByClassName("sized-section")
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index] as HTMLElement;
        element.style.height = `${window.innerHeight * sectionSize}px`
    }
}