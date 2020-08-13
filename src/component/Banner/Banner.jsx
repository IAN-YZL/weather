import React from 'react';
import WeatherInfo from './WeatherInfo';
import Country from './Country';

const Banner = () => (
    <div>
        <WeatherInfo />
        <Country country="France"/>
    </div>
);

export default Banner;