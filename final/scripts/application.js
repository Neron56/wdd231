let postCount = Number(localStorage.getItem("postCount")) || 0;

postCount++;
localStorage.setItem("postCount", postCount);

const params = new URLSearchParams(window.location.search);

const userName = params.get("name");

if(postCount<=1){
    document.getElementById("postCount").textContent = 
        `Thank you ${userName}! You've aided in submitting  ${postCount} request/gathering!`
}else{
    document.getElementById("postCount").textContent = 
        `Thank you ${userName}! You've aided in submitting  ${postCount} requests/gatherings!`
}
