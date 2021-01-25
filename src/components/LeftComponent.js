import React from 'react';
import { Button } from 'reactstrap';


function Left({ temparature, weatherCondition, getDate, imgSource, cityName, errMess }) {
    if (errMess) {
        return (
            <React.Fragment>
                <div className='searchContainer'>
                    <Button onClick={() => {
                        var input = document.querySelector('#input-container');
                        input.style.display = 'block';
                        input.style.height = "100%";
                    }}>
                        Search for places
                    </Button>
                    <i className="d-none far fa-compass"></i>
                </div>
                <p className="errMess">{errMess}</p>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className='searchContainer'>
                    <Button onClick={() => {
                        var input = document.querySelector('#input-container');
                        input.style.display = 'block';
                        input.style.height = "100%";
                    }}>
                        Search for places
                    </Button>
                    <i className="far fa-compass fa-2x"></i>
                </div>
                <img src={imgSource} alt={imgSource} />
                <h1>{temparature} <span>&#176;C</span> </h1>
                <h3>{weatherCondition}</h3>

                <div className="currentTime">
                    <span>Today</span>
                    <span>  .  </span>
                    <span> {getDate(new Date())} </span>
                </div>

                <p className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    {cityName}
                </p>
            </React.Fragment>
        )
    }
};

export default Left;