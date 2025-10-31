const nav = document.querySelector("#navigation");
const icon = document.querySelector("#icon");

let menu = "closed"
icon.addEventListener("click", () => {
    menu = hamburger(menu)
})
function hamburger(menu) {    
        if (menu === "closed"){
            menu = "open";
            nav.style.display = "grid";
            icon.innerHTML = "<img src='images/close-icon.svg' alt='hamburger menu' width='30px'>"
            return menu
        } else {
            menu = "closed";
            nav.style.display = "none";
            icon.innerHTML = "<img src='images/hamburger-icon.svg' alt='hamburger menu' width='30px'>"
            return menu
        }
}