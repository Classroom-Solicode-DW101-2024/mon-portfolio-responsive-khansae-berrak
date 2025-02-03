document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".togglemenu");
    const nav = document.querySelector("nav");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let width = bar.getAttribute("style").match(/(\d+)%/)[1];
        bar.style.width = "0";
        
        setTimeout(() => {
            bar.style.width = width + "%";
        }, 500);
    });
});