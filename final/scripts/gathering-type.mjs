const table = document.querySelector("#campaignTable");
const cards = document.querySelector("#campaignCards");
const tableIcon = document.querySelector("#tableIcon");
const cardIcon = document.querySelector("#cardIcon");

tableIcon.addEventListener("click", () => {
    openTable()
})
cardIcon.addEventListener("click", () => {
    openCards()
})
export function openTable() {
    cards.style.display = "none";
    table.style.display = "table";
}
export function openCards() {
    table.style.display = "none";
    if(window.screen.width >= 640){
        cards.style.display = "grid";
    }
    else{
        cards.style.display = "flex";
    }
}