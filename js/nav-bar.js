/* jshint esversion: 6 */

console.log("script nav-bar.js is runing");

document.body.addEventListener("click", (e) => {
    console.log("----------------Event------------------");
    const target = e.target.closest(".nav__action-button");
    console.log("target :", target);
    
    if (target != null) {
        console.log("OK");
        document.querySelector(".nav__bar").classList.toggle("open");
        e.preventDefault();
    } else {
        console.log("NULL");
        // document.querySelector(".nav").style.backgroundColor="initial";
        document.querySelector(".nav__bar").classList.remove("open");
    }
    // callback(e);
});
