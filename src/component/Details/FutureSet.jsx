import React from 'react';
import Temp from './Temp';

const FutureSet = (props) => (
    <div>
        <p>{props.children}</p>
        <Temp></Temp>
    </div>
);

export default FutureSet;