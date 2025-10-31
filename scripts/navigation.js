const nav = document.querySelector("#navigation");
const icon = document.querySelector("#icon");

let menu = "closed"
icon.addEventListener("click", () => {
    menu = hamburger(menu)
})
function hamburger(menu) {    
        if (menu === "closed"){
            menu = "open";
            nav.style.display = "block";
            icon.innerHTML = "<img src='images/closeIcon.svg' alt='hamburger menu' width='30px'>"
            return menu
        } else {
            menu = "closed";
            nav.style.display = "none";
            icon.innerHTML = "<img src='images/hamburgerIcon.svg' alt='hamburger menu' width='30px'>"
            return menu
        }
}