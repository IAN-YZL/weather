import React from 'react';
import FutureSet from './FutureSet';

import style from './Future.module.css';

const Details = () => (
    <div className={style.future}>
        <FutureSet>Mon</FutureSet>
        <FutureSet>TUE</FutureSet>
        <FutureSet>WED</FutureSet>
        <FutureSet>THU</FutureSet>
        <FutureSet>FRI</FutureSet>
        <FutureSet>SAT</FutureSet>
        <FutureSet>SUN</FutureSet>
    </div>
);

export default Details;