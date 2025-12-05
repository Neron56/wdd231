import { openCards } from "./gathering-type.mjs";

const modal = document.querySelector("#modal")

let campaignList = []
createCampaignList()

async function createCampaignList() {
    const response = await fetch("https://neron56.github.io/wdd231/final/data/gatherings.json");
    const campaigns = await response.json();
    if(window.screen.width <= 640){
        openCards()
    }
    campaignList = campaigns.campaigns
    createTable(campaigns.campaigns)
    createCards(campaigns.campaigns)
}

function createTable(campaigns) {
    campaigns.forEach(element => {
        let row = document.createElement("tr");
        let campaignName = document.createElement("td");
        let playerAmount = document.createElement("td");
        let currentDm = document.createElement("td");
        let shortDescription = document.createElement("td");
        let startingDate = document.createElement("td");
        let meetingPlace = document.createElement("td");
        let button = document.createElement("td");
        
        campaignName.textContent = element.name;
        playerAmount.textContent = element.party_size;
        if (element.dm_status == "No" ){
            currentDm.innerHTML = `<img src="images/x.svg" alt="X marks the spot, We don't got one" class="currentDM">`;
        }
        else {
            currentDm.innerHTML = `<img src="images/checkmark.svg" alt="Checkmark, We got one" class="currentDM">`;
        }   
        shortDescription.innerHTML = `<button id=${element.id} class="tableButton">Read Description</button>`;
        shortDescription.addEventListener("click", () =>{

        })
        startingDate.textContent = element.start_date;
        meetingPlace.textContent = element.city;
        button.innerHTML = `<button id=${element.id} class="tableButton">Request to Join</button>`;
        button.addEventListener("click", () =>{
            fillForm(element.id)
        })
        shortDescription.addEventListener("click", () =>{
                modal.close()
                modal.innerHTML = "";
                let campaignTitle = document.createElement("h3");
                let campaignDescription = document.createElement("p");
                let close = document.createElement("button");

                campaignTitle.innerHTML = element.name;
                campaignDescription.innerHTML = element.description;
                close.setAttribute("id", "closeModal");
                close.innerHTML = "Close";

                modal.appendChild(campaignTitle);
                modal.appendChild(campaignDescription);
                modal.appendChild(close);
                modal.showModal();
                closeFunction();
        })

        row.appendChild(campaignName);
        row.appendChild(playerAmount);
        row.appendChild(currentDm);
        row.appendChild(shortDescription);
        row.appendChild(startingDate);
        row.appendChild(meetingPlace);
        row.appendChild(button);
        
        document.querySelector("#campaignTable").appendChild(row);
    });
}

function createCards(campaigns) {
    campaigns.forEach(element => {
            let card = document.createElement("div");
            let campaignName = document.createElement("h3");
            let playerAmount = document.createElement("p");
            let currentDm = document.createElement("div");
            let shortDescription = document.createElement("button");
            let startingDate = document.createElement("p");
            let meetingPlace = document.createElement("address");
            let apply = document.createElement("button");
            
            card.setAttribute("class","card")
            campaignName.textContent = element.name;
            playerAmount.setAttribute("id","partySize")
            playerAmount.textContent = `Party Size: ${element.party_size}`;
            if (element.dm_status == "No" ){
                currentDm.innerHTML = `DM Status: <input type='checkbox' disabled>`;
            }
            else {
                currentDm.innerHTML = `DM Status: <input class='checkbox' type='checkbox' disabled checked>`;
            }
            currentDm.setAttribute("id","dmStatus")
            shortDescription.setAttribute("id", element.id);
            shortDescription.setAttribute("class", "description");
            shortDescription.innerHTML = `Read Description`;
            startingDate.textContent = `Start Date: ${element.start_date}`;
            meetingPlace.textContent = `Meeting City: ${element.city}`;
            apply.setAttribute("id", element.id);
            apply.setAttribute("class", "apply");
            apply.innerHTML = "Request to Join";
            apply.addEventListener("click", () =>{
                fillForm(element.id)
            })
            shortDescription.addEventListener("click", () =>{
                modal.close()
                modal.innerHTML = "";
                let campaignTitle = document.createElement("h3");
                let campaignDescription = document.createElement("p");
                let close = document.createElement("button");

                campaignTitle.innerHTML = element.name;
                campaignDescription.innerHTML = element.description;
                close.setAttribute("id", "closeModal");
                close.innerHTML = "Close";

                modal.appendChild(campaignTitle);
                modal.appendChild(campaignDescription);
                modal.appendChild(close);
                modal.showModal();
                closeFunction();
            })
            
            card.appendChild(campaignName);
            card.appendChild(playerAmount);
            card.appendChild(currentDm);
            card.appendChild(shortDescription);
            card.appendChild(startingDate);
            card.appendChild(meetingPlace);
            card.appendChild(apply);
            
            document.querySelector("#campaignCards").appendChild(card);
        });
}
function fillForm(campaignId){
    let title = document.querySelector("#campaignName")

    campaignList.forEach(element => {
        if (campaignId == element.id){
            title.textContent =  element.name
        }
    })
}

function closeFunction(){
    let closeModal = document.querySelector("#closeModal");

    closeModal.addEventListener('click', () => {
    modal.close();
    })
}