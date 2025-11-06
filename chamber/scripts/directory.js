createbusinessList()

async function createbusinessList() {
    const response = await fetch("http://127.0.0.1:5500/chamber/data/members.json")
    const businesses = await response.json();
    tablebusinesses(businesses.businesses)   
    cardbusinesses(businesses.businesses)
}


function tablebusinesses(businesses) {
    businesses.forEach(business => {
        let tableRow = document.createElement("tr");
        let name = document.createElement("td");
        let address = document.createElement("td");
        let number = document.createElement("td");
        let url = document.createElement("td");

        name.innerHTML = `${business.name}`;
        address.innerHTML = `${business.address}`;
        number.innerHTML = `${business.number}`;
        url.innerHTML = `<a href="${business.url}">${business.url}</a>`;

        tableRow.appendChild(name);
        tableRow.appendChild(address);
        tableRow.appendChild(number);
        tableRow.appendChild(url);

        document.querySelector("#businessTable").appendChild(tableRow)
    });
}

function cardbusinesses(businesses) {
    businesses.forEach(business => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let url = document.createElement("a");

        image.setAttribute("src",business.logo);
        image.setAttribute("alt",`Business Logo for ${business.name}`);
        image.setAttribute("loading","lazy");
        image.setAttribute("class","businessImage");
        name.innerHTML = `${business.name}`;
        address.innerHTML = `${business.address}`;
        number.innerHTML = `${business.number}`;
        url.setAttribute("href", business.url);
        url.innerHTML = `${business.url}`;

        card.setAttribute("class","card")

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(url);

        document.querySelector("#businessCards").appendChild(card)
    });
}