const btnOpen = document.querySelector(".menu-open")
const headerEl = document.querySelector("header")

btnOpen.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open")
})
