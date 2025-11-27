import { places } from "../data/place-list.mjs";

const list = places

createPlaceGrid()
function createPlaceGrid(){
    list.forEach(place => {
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let image = document.createElement("figure");
        let description = document.createElement("p");
        let address = document.createElement("address");
        let learnMore = document.createElement("button");

        card.setAttribute("class","card");
        name.innerHTML = place.name;
        image.innerHTML = `<img src="${place.image}" loading="lazy" alt="A picture of ${place.name}">`
        description.innerHTML = place.description;
        address.innerHTML = place.address;
        learnMore.innerHTML = `Learn more`

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(learnMore);

        document.querySelector("#locations").appendChild(card);
    });
}