// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const loader = document.querySelector(".preloader")
window.addEventListener("DOMContentLoaded", () => {
    loader.classList.add("hide-preloader")
})
const button = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")
button.addEventListener("click", () => {
    button.classList.toggle("slide")
    if (button.classList.contains("slide")) {
        video.pause()
    } else {
        video.play()
    }
})
