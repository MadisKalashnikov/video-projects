const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")
console.log(slides.length)

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})
let slidePos = 0
nextBtn.addEventListener("click", () => {
    slidePos++
    changePos()
})
prevBtn.addEventListener("click", () => {
    slidePos--
    changePos()
})
const changePos = () => {
    // if (slidePos === slides.length) {
    //     slidePos = 0
    // } else if (slidePos < 0) {
    //     slidePos = slides.length - 1
    // }
    if (slidePos < slides.length - 1) {
        nextBtn.style.display = "block"
    } else {
        nextBtn.style.display = "none"
    }
    if (slidePos > 0) {
        prevBtn.style.display = "block"
    } else {
        prevBtn.style.display = "none"
    }
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slidePos * 100}%)`
    })
    console.log(slidePos)
}
prevBtn.style.display = "none"
