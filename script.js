//    JUGNU PORTFOLIO — MAIN JAVASCRIPT

const loader = document.getElementById("loader");

// LOADING SCREEN

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});