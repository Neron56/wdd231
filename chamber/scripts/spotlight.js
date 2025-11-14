fetchBusinesses()

async function fetchBusinesses() {
    const response = await fetch("https://neron56.github.io/wdd231/chamber/data/members.json");
    const businesses = await response.json();
    spotlightBusiness(businesses.businesses);
}

function spotlightBusiness(businesses) {
    let businessCount = businesses.length;
    let chosenBusinesses = []
    while (chosenBusinesses.length != 3) {
        let randomBusiness = Math.floor(Math.random() * businessCount);
        let randomBusinessMembership = businesses[randomBusiness].membership;
        if(randomBusinessMembership > 1){
            if (!chosenBusinesses.includes(randomBusiness)) {
            chosenBusinesses.push(randomBusiness)
            }
        }
    }
    chosenBusinesses.forEach(chosenId => {
        businesses.forEach(business => {
            let businessId = business.id;
            if(chosenId == businessId){
                let card = document.createElement("div");
                let image = document.createElement("img");
                let name = document.createElement("h3");
                let address = document.createElement("p");
                let number = document.createElement("p");
                let url = document.createElement("a");
                let membership = document.createElement("p")
        
                image.setAttribute("src",business.logo);
                image.setAttribute("alt",`Business Logo for ${business.name}`);
                image.setAttribute("loading","lazy");
                image.setAttribute("class","businessImage");
                name.innerHTML = `${business.name}`;
                address.innerHTML = `${business.address}`;
                number.innerHTML = `${business.number}`;
                url.setAttribute("href", business.url);
                url.innerHTML = `${business.url}`;
                if(business.membership == 2){
                    membership.innerHTML = `Membership level: Silver`;
                }else{
                    membership.innerHTML = `Membership level: Gold`;
                }
        
                card.setAttribute("class","card");
        
                card.appendChild(image);
                card.appendChild(name);
                card.appendChild(address);
                card.appendChild(number);
                card.appendChild(url);
                card.appendChild(membership);
        
                document.querySelector("#businessCards").appendChild(card);
            }
        });
    });
}