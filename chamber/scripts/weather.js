getWeather()
async function getWeather() {
    //const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=16.78&lon=-3.01&appid=ee5c4d8ea358463375cfeeabfcff2f70&units=imperial");
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
    humidity.innerHTML = `Humidity: ${weather.main.humidity}%`;
    sunrise.innerHTML = `Sunrise: ${weather.sys.sunrise}`;
    sunset.innerHTML = `Sunset: ${weather.sys.sunset}`;

    weatherData.appendChild(temp);
    weatherData.appendChild(clouds);
    weatherData.appendChild(high);
    weatherData.appendChild(low);

    document.querySelector("#currentWeather").appendChild(weatherData);

}