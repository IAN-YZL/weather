import React from 'react';

const Temp = (props) => (
    <div>
        <div>
            <p>{props.temp} &#176;</p>
            <p>{props.children}</p>
        </div>
    </div>
);

export default Temp;