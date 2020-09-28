const axios = require('axios');
const weatherApi = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5'
})

function getForecastWeather() {
    return weatherApi.get('/forecast', {
        params: {
            q: "Paris",
            units: "metric",
            APPID: "1d7afce7ea097626fb8d59ecc5b971c0",
        }
    }).then((res) => {
        // console.log(res.data.list[30].dt_txt.slice(0, 10));
        // console.log(new Date("2020-08-29").getDay());
        const output = []
        for (let i = 0; i < 40; i ++) {
            if ((i + 8) % 8 !== 0) {
                continue;
            }
            const data = res.data.list[i];
            const date = data.dt_txt.slice(0, 10);
            output.push({
                date,
                weather: data.weather[0].main,
                temp: data.main.temp,
            })
        }
        return output;
    });
}

module.exports = getForecastWeather;