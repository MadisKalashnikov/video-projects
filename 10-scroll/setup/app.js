// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")

navToggle.addEventListener("click", () => {
    // linksContainer.classList.toggle("show-links")
    const links = document.querySelector(".links")
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = "0px"
    }
})
// ********** fixed navbar ************
const nav = document.getElementById("nav")
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset
    const navHeight = nav.getBoundingClientRect().height
    if(scrollHeight > navHeight / 2) {
        nav.classList.add("fixed-nav")
    } else {
        nav.classList.remove("fixed-nav")
    }

})
// ********** smooth scroll ************
const links = document.querySelectorAll(".scroll-link")
links.forEach(link => link.addEventListener("click", (clicked) => {
    // prevent default scrolling
    clicked.preventDefault()
    // get id of clicked and slice it, use it for element
    const id = clicked.currentTarget.getAttribute("href").slice(1)
    const element = document.getElementById(id)
    const navHeight = document.getElementById("nav").getBoundingClientRect().height
    let position = element.offsetTop - navHeight
    console.log(navHeight)
    position = position + navHeight - 65
    window.scrollTo({
        left: 0,
        top: position
    }) 
    linksContainer.style.height = 0
}))
// select links
