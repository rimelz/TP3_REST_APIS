const fetch = require('node-fetch');

const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

// Function to fetch weather data using node-fetch library
function getWeatherData(city, callback) {
    const url = BASE_URL + city;

    fetch(url)
        .then((res) => res.json())
        .then((weatherData) => callback(null, weatherData))
        .catch((error) => callback(error, null));
}

// Enhanced function with metric units and French language support
function getWeatherDataMetricFrench(city, callback) {
    const url = BASE_URL + city + "&units=metric&lang=fr";

    fetch(url)
        .then((res) => res.json())
        .then((weatherData) => callback(null, weatherData))
        .catch((error) => callback(error, null));
}

// Callback function to display weather information including description, temperature, and humidity
function afficherMeteo(error, data) {
    if (error) {
        console.error("Erreur:", error.message);
        return;
    }

    console.log("\n=== Météo à Sousse ===");
    console.log("Description:", data.weather[0].description);
    console.log("Température:", data.main.temp, "°C");
    console.log("Humidité:", data.main.humidity, "%");
    console.log("=====================\n");
}

// Execute weather data retrieval with metric units and French language
getWeatherDataMetricFrench("Sousse", afficherMeteo);
