import React from 'react';
import style from './Banner.module.scss';


const City = (props) => (
    <div className={style.city}>
        <p>{props.city}<span className={style.underline}></span></p>
    </div>
);

export default City;