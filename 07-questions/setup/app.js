//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question")

questions.forEach(question => {
    const btn = question.querySelector(".question-btn")
    console.log(btn)
    btn.addEventListener("click", () => {
        questions.forEach(clicked => {
            console.log(clicked)
            if(clicked !== question) {
                clicked.classList.remove("show-text")
            }
        question.classList.toggle("show-text")
        })
    })
})

// const btns = document.querySelectorAll(".question-btn")

// btns.forEach(btn => btn.addEventListener("click", (clicked) => {
//     const btn = clicked.currentTarget.parentElement.parentElement
//     btn.classList.toggle("show-text")
// }))