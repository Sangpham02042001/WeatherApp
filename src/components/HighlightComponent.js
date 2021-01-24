import React, { Component } from 'react';
import { Progress } from 'reactstrap';

function HighlightComponent({ title, val }) {
    var header;
    var span;
    switch (title) {
        case 'windStatus':
            header = 'Wind Status';
            span = 'mph';
            break;
        case 'humidity':
            header = 'Humidity';
            span = '%';
            break;
        case 'visibility':
            header = 'Visibility';
            span = 'miles';
            break;
        case 'airPressure':
            header = 'Air Pressure';
            span = 'mb';
            break;
    }
    return (
        <div className='hightlight-com'>
            <p>{header}</p>
            <h1>{val} <span>{span}</span></h1>
            {title !== 'humidity' ?
                <div></div> :
                <div className='progress-container'>
                    <div className='percent'>
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                    <Progress color='warning' value={val} />
                </div>}
        </div>
    )
}

export default HighlightComponent;