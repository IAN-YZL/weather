const axios = require('axios');
const weatherApi = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5'
})

function getCurrentWeather() {

    return weatherApi.get('/weather',{
        params: {
            q: "Paris",
            units: "metric",
            APPID: process.env.REACT_APP_API_KEY
        }
    })
    .then(res => {
        const {main, wind, weather} = res.data;
        const {temp, humidity} = main;
        const output = {
            temp,
            wind: wind.speed,
            humidity,
            weather: weather[0].main,
        };
        return output;
    })
    .catch(err => {
        console.error(err); 
    })
}

module.exports = getCurrentWeather;