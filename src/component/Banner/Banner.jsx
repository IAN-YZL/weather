import React from 'react';
import style from './Banner.module.css';

import WeatherInfo from './WeatherInfo';
import City from './City';

const Banner = () => (
    <div className={style.banner}>
        <WeatherInfo />
        <City city="Paris"/>
    </div>
);

export default Banner;