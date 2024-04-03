const menu = document.querySelector('#menu-toggle')
const sideBar = document.querySelector('.buttons')

window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 425px)").matches) {
        menu.hidden = false
        sideBar.style.display = "none"
    }
    else if (window.matchMedia("(min-width: 450px)").matches) {
        sideBar.style.display = "flex"
    }
})
menu.addEventListener('click', () => {
    if (sideBar.style.display === "flex") {
        sideBar.style.display = "none"
    }
    else if (sideBar.style.display === "none") {
        sideBar.style.display = "flex"
    }
})