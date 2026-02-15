const axios = require('axios');

const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

// Implementation using axios library for API requests
function getWeatherData(city, callback) {
    const url = BASE_URL + city;

    axios.get(url)
        .then((res) => callback(null, res.data))
        .catch((error) => callback(error, null));
}

// Weather data retrieval with metric units and French language (axios implementation)
function getWeatherDataMetricFrench(city, callback) {
    const url = BASE_URL + city + "&units=metric&lang=fr";

    axios.get(url)
        .then((res) => callback(null, res.data))
        .catch((error) => callback(error, null));
}

// Display callback for weather data including description, temperature, and humidity
function afficherMeteo(error, data) {
    if (error) {
        console.error("Erreur:", error.message);
        if (error.response) {
            console.error("Statut:", error.response.status);
            console.error("Détails:", error.response.data);
        }
        return;
    }

    console.log("\n=== Météo à Sousse (AXIOS) ===");
    console.log("Description:", data.weather[0].description);
    console.log("Température:", data.main.temp, "°C");
    console.log("Humidité:", data.main.humidity, "%");
    console.log("==============================\n");
}

// Test avec axios
getWeatherDataMetricFrench("Sousse", afficherMeteo);
