const formLoadTime = `${new Date()}`
const timestamp = document.querySelector("#timestamp");
timestamp.innerHTML = formLoadTime;
console.log(formLoadTime)

const membership = document.querySelector("#modal");
const nonProfitButton = document.querySelector("#openNonProfit");
const bronzeButton = document.querySelector("#openBronze");
const silverButton = document.querySelector("#openSilver");
const goldButton = document.querySelector("#openGold");

nonProfitButton.addEventListener('click', () => {
    openModal(nonProfitButton.id)
})
bronzeButton.addEventListener('click', () => {
    openModal(bronzeButton.id)
})
silverButton.addEventListener('click', () => {
    openModal(silverButton.id)
})
goldButton.addEventListener('click', () => {
    openModal(goldButton.id)
})



function openModal(type){
    membership.innerHTML = "";
    let header = document.createElement("h2");
    let list = document.createElement("ul");
    let perk1 = document.createElement("li");
    let perk2 = document.createElement("li");
    let perk3 = document.createElement("li");
    let perk4 = document.createElement("li");
    let perk5 = document.createElement("li");
    let close = document.createElement("button");

    header.innerHTML = "";
    perk1.innerHTML = "Event location discounts";
    perk2.innerHTML = "Special training events";
    perk3.innerHTML = "Spotlight on the home page/town sites";
    perk4.innerHTML = "Special silver business events";
    perk5.innerHTML = "Billboard advertizing";
    list.innerHTML = "";
    close.setAttribute("id", "closeModal");
    close.innerHTML = "Close";

    switch(type){
        case "openNonProfit":
            header.innerHTML = `Non-Profit Membership Level Perks`;
            list.appendChild(perk1);
            break;
        case "openBronze":
            header.innerHTML = `Bronze Membership Level Perks`;
            list.appendChild(perk1);
            list.appendChild(perk2);
            break;
        case "openSilver":
            header.innerHTML = `Silver Membership Level Perks`;
            list.appendChild(perk1);
            list.appendChild(perk2);
            list.appendChild(perk3);
            break;
        case "openGold":
            header.innerHTML = `Gold Membership Level Perks`;
            list.appendChild(perk1);
            list.appendChild(perk2);
            list.appendChild(perk3);
            list.appendChild(perk4);
            list.appendChild(perk5);
            break;

    }

    membership.appendChild(header);
    membership.appendChild(list);
    membership.appendChild(close);
    membership.showModal();

    let closeModal = document.querySelector("#closeModal");

    closeModal.addEventListener('click', () => {
        membership.close();
    })
}