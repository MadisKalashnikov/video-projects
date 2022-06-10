// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const nav = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const hamburger = document.querySelector(".fas.fa-bars")
nav.addEventListener("click", () => {
    const linkClasses = links.classList
    const hamburgerClasses = hamburger.classList
    linkClasses.toggle("show-links")
    hamburgerClasses.toggle("fa-xmark")
})

