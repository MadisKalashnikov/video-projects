const container = document.querySelector(".about")
const tabs = document.querySelectorAll(".tab-btn")
const articles = document.querySelectorAll(".content")

container.addEventListener("click", (clicked) => {
    const clickedId = clicked.target.dataset.id
    if (clickedId) {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        clicked.target.classList.add("active")
        articles.forEach(article => {
            article.classList.remove("active")
        })
        const displayElement = document.getElementById(clickedId)
        displayElement.classList.add("active")
    }
})