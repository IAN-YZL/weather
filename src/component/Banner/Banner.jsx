import React from 'react';
import style from './Banner.module.scss';
import WeatherInfo from './WeatherInfo';
import City from './City';

const Banner = () => (
    <div className={style.banner}>
        <WeatherInfo />
        <City />
    </div>
);

export default Banner;