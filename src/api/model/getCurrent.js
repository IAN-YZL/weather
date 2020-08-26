const axios = require('axios');
const weatherApi = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5'
})

function getCurrentWeather(type) {
    const url = (type === "current")?"/weather":"/forecast";
    console.log(process.env.REACT_APP_API_KEY);

    return weatherApi.get(url,{
        params: {
            q: "Paris",
            units: "metric",
            APPID: "a188b2650dceb0044e221c9ed68ae9b2"
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