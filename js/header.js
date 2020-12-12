let myNav = document.querySelector(".navbar");
window.onscroll = function () {
    let top = window.scrollY;
    // let middle = window.screen.height / 2;
    let middle = window.innerHeight / 2 - 60;
    if (top >= middle) {
        myNav.classList.add("nav-colored");
        myNav.classList.add("shadow");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("shadow");
        myNav.classList.remove("nav-colored");
    }
};
