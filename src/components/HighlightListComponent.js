import React, { Component } from 'react';
import HighlightComponent from './HighlightComponent';

function HightlightList({ windStatus, humidity, visibility, airPressure }) {
    return (
        <div className='hightlight-list'>
            <HighlightComponent title='windStatus' val={windStatus} />
            <HighlightComponent title='humidity' val={humidity} />
            <HighlightComponent title='visibility' val={Math.round(visibility * 10 / 10000)} />
            <HighlightComponent title='airPressure' val={airPressure} />
        </div>
    )
}

export default HightlightList;