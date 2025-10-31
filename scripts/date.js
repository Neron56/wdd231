const currentyear = document.querySelector("#currentYear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">©${today.getFullYear()} -- Michael Shaw -- Utah, USA</span>`;
document.getElementById("lastModified").innerHTML = `Last modified: ${document.lastModified}`;