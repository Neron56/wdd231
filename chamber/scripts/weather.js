const latitude = -3.01;
const longitude = 16.78;
const apiKey = "ee5c4d8ea358463375cfeeabfcff2f70";
getWeather()
getForcast()
async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`);
    let weather = await response.json();
    let weatherData = document.createElement("div");
    let temp = document.createElement("p");
    let clouds = document.createElement("p");
    let high = document.createElement("p");
    let low = document.createElement("p");
    
    temp.innerHTML = `${weather.main.temp} ℉`;
    clouds.innerHTML = `${weather.weather[0].description}`;
    high.innerHTML = `High: ${weather.main.temp_max}`;
    low.innerHTML = `Low: ${weather.main.temp_min}`;
    weatherData.appendChild(temp);
    weatherData.appendChild(clouds);
    weatherData.appendChild(high);
    weatherData.appendChild(low);

    document.querySelector("#currentWeather").appendChild(weatherData);
}

async function getForcast() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
    let forcasts = await response.json();
    let forcast = document.createElement("div")
    let day1 = document.createElement("h3");
    let day2 = document.createElement("h3");
    let day3 = document.createElement("h3");

    let twoDaysFromNow = getTwoDaysFromNow()
    day1.innerHTML = `Today: ${forcasts.list[0].main.temp}℉`;
    day2.innerHTML = `Tomorrow: ${forcasts.list[8].main.temp}℉`;
    day3.innerHTML = `${twoDaysFromNow}: ${forcasts.list[16].main.temp}℉`;

    forcast.appendChild(day1);
    forcast.appendChild(day2);
    forcast.appendChild(day3);
    document.querySelector("#forcast").appendChild(forcast)
}

function getTwoDaysFromNow() {
    let currentDate = new Date().getDay();
    let twoDaysFromNow;
    switch(currentDate){
        case 0:
            twoDaysFromNow = "Sunday"
        case 1:
            twoDaysFromNow = "Tuesday"
        case 2:
            twoDaysFromNow = "Wednesday"
        case 3:
            twoDaysFromNow = "Thursday"
        case 4:
            twoDaysFromNow = "Friday"
        case 5:
            twoDaysFromNow = "Saturday"
        case 6:
            twoDaysFromNow = "Monday"
    }
    return twoDaysFromNow
}