const table = document.querySelector("#businessTable");
const cards = document.querySelector("#businessCards");
const tableIcon = document.querySelector("#tableIcon");
const cardIcon = document.querySelector("#cardIcon");

tableIcon.addEventListener("click", () => {
    openTable()
})
cardIcon.addEventListener("click", () => {
    openCards()
})
function openTable() {
    cards.style.display = "none";
    table.style.display = "table";
}
function openCards() {
    table.style.display = "none";
    if(window.screen.width >= 640){
        console.log("larger screen")
        cards.style.display = "grid";
    }
    else{
        cards.style.display = "flex";
    }
}