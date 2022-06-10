const toggleBtn = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

toggleBtn.addEventListener("click", () => {
    const sidebarClasses = sidebar.classList
    sidebarClasses.toggle("show-sidebar")
})
closeBtn.addEventListener("click", () => {
    const sidebarClasses = sidebar.classList
    sidebarClasses.remove("show-sidebar")
})