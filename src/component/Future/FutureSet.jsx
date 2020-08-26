import React from 'react';
import Temp from './Temp';

const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FIR", "SAT"];
const WEATHER = {
    Thunderstorm: "11d",
    Drizzle: "09d",
    Rain: "10d",
    Snow: "13d",
    Atmosphere: "50d",
    Clear: "01d",
    Clouds: "02d",
}

const vara = "THUNDERSTORM";

console.log(WEATHER[vara]);
    // {key: "THUNDERSTORM", value: },
    // {key: "DRIZZLE", value: "09d"},
    // {key: "RAIN", value: "10d"},
    // {key: "SNOW", value: "13d"},  

const FutureSet = (props) => (
    <div>
        {console.log(WEATHER[props.weather])}
        <p>{DAY[props.children]}</p>
        <Temp temp={props.temp}></Temp>
        <img src={`http://openweathermap.org/img/wn/${WEATHER[props.weather]}@2x.png`} alt="weather"/>
    </div>
);

export default FutureSet;