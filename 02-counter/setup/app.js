// initial count
let count = 0
// value element
let value = document.getElementById("value")
// all buttons
const btns = document.querySelectorAll(".btn")
// for each button add event listener "click" with callback function
btns.forEach(btn => {
    btn.addEventListener("click", (clicked) => {
        // clicked button classlist
        let clickedBtn = clicked.currentTarget.classList
        // if clicked button classlist contains "className"
        if (clickedBtn.contains("increase")) {
            count++
        } else if (clickedBtn.contains("decrease")) {
            count--
        } else {
            count = 0
        }
        // value element text content = count
        value.textContent = count
        // if count > 0 bg green
        if (count > 0) {
            document.body.style.backgroundColor = "var(--clr-green-dark)"
        } else if (count < 0) {
            document.body.style.backgroundColor = "var(--clr-red-dark)"
        } else {
            document.body.style.backgroundColor = "var(--clr-grey-10)"
        }
        // if count < 0 bg red
        // else bg white
        
    })
})