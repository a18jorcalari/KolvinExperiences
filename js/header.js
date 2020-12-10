let myNav = document.querySelector("#header");
window.onscroll = function () {
    var top = window.scrollY;
    // "use strict";
    // console.log(top);
    if (top >= 100) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
