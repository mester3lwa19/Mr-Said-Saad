let preloader = document.querySelector(".preloader");
let toggle = document.querySelector(".toggle");
let sideBar = document.querySelector(".side-bar");
window.addEventListener("load",function() {
    preloader.style.display = 'none'
})
toggle.addEventListener("click", function () {
    sideBar.classList.toggle("display")
})