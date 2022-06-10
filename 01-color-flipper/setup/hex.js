const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
    let hexStart = "#"
    for (let i = 0; i < 6; i++) {
        hexStart += hex[randomNumber()]
    }
    color.textContent = hexStart;
    document.body.style.backgroundColor = hexStart
})

function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}