import React from 'react';
import Temp from './Temp';
import OtherInfo from './OtherInfo';

const WeatherInfo = () =>(
    <div>
        <Temp temp="12">Cloudy</Temp>
        <div>
            <OtherInfo value="6.4%">Humidity</OtherInfo>
            <OtherInfo value="12 K/M">Wind</OtherInfo>
        </div>
    </div>
);

export default WeatherInfo;