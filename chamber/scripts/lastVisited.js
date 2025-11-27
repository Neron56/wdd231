const msToHours = 3600000;
let siteMessage = document.querySelector("#lastVisited");

let lastVisited = localStorage.getItem("lastVisited");
const currentVisit = new Date();

let hoursSince = (currentVisit.getTime() - lastVisited) / msToHours;

if(lastVisited <= 0){
    siteMessage.textContent = "Welcome! Let us know if you have any Questions.";
}else{
    if (hoursSince < 24){
        siteMessage.textContent = "Back so soon! Awesome!";
    }else{
        let daysSince = Math.floor(hoursSince / 24);
        if(daysSince <= 1){
            siteMessage.textContent = `You last visited ${daysSince} day ago`;
        }else{
            siteMessage.textContent = `You last visited ${daysSince} days ago.`;
        }
    };
};

localStorage.setItem("lastVisited", currentVisit.getTime());