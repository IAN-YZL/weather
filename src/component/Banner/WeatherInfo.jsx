import React from 'react';
import style from './Banner.module.css';

import Temp from './Temp';
import OtherInfo from './OtherInfo';

const WeatherInfo = () =>(
    <div className={style.weatherInfo}>
        <Temp temp="12">Cloudy</Temp>
        <div className={style.infoSet}>
            <OtherInfo value="6.4%">Humidity</OtherInfo>
            <OtherInfo value="12 K/M">Wind</OtherInfo>
        </div>
    </div>
);

export default WeatherInfo;