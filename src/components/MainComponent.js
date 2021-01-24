import React, { Component } from "react";
import InputContainer from "./InputComponent";
import * as baseUrl from "../shared/baseUrl";
import * as WeatherConditon from "../shared/weatherCondition";
import * as Time from "../shared/DayandMonth";
import Left from "./LeftComponent";
import FutureList from "./FutureList";
import HightlightList from './HighlightListComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Ha Noi",
      temperature: 0,
      weather: "",
      windStatus: 0,
      humidity: 0,
      visibility: 0,
      airPerssure: 0,
      isCelcius: true,
      image: "",
      forecastList: [],
      errMess: "",
    };
    this.searchCity = this.searchCity.bind(this);
  }

  componentDidMount() {
    this.searchCity(this.state.cityName);
  }



  handleInputChange = (event) => {
    this.setState({
      cityName: event.target.value,
    });
  };
  getOtherData(cityName) {
    return fetch(
      baseUrl.currentTemp + cityName + baseUrl.apiKey
    ).then((response) => response.json());
  }
  getForecastList(cityName) {
    return fetch(
      baseUrl.forecastTemp + cityName + baseUrl.apiKey
    ).then((response) => response.json());
  }
  searchCity(cityName) {
    return Promise.all([
      this.getOtherData(cityName),
      this.getForecastList(cityName),
    ]).then(([otherData, forecastList]) => {
      var x = otherData.weather[0].main;
      var temp = Math.round(otherData.main.temp - 273.15);
      this.setState({
        weather: x,
        windStatus: otherData.wind.speed,
        temperature: temp,
        humidity: otherData.main.humidity,
        airPerssure: otherData.main.pressure,
        visibility: otherData.visibility,
        image: WeatherConditon.weatherCondition.filter(
          (ele) => ele.name === x.toLowerCase()
        )[0].image,
        errMess: "",
        forecastList: forecastList.list.filter(function (eachElem, index) {
          return index % 8 === 7;
        }),
      });
      console.log(this.state.forecastList)
    });
  }

  getWeatherCondition() {
    let res;
    try {
      res = (this.state.forecastList[4].weather[0].main.toLowerCase())
    } catch (error) {
      res = 'clear'
    }
    return res;
  }
  render() {
    // var date = new Date();
    return (
      <React.Fragment>
        <div className="left">
          <InputContainer
            cityName={this.state.cityName}
            searchCity={this.searchCity}
            forecastTemp={this.forecastTemp}
            handleInputChange={this.handleInputChange}
          />
          <Left
            temparature={this.state.temperature}
            weatherCondition={this.state.weather}
            getDate={Time.getDate}
            imgSource={this.state.image}
            cityName={this.state.cityName}
            errMess={this.state.errMess}
          />
        </div>
        <div className="right">
          <div className="button-group m-3">
            <button
              className={this.state.isCelcius ? "button-active" : ""}
              onClick={() => {
                if (this.state.isCelcius) {
                  return;
                } else {
                  this.setState({
                    temparature: Math.round(
                      ((this.state.temperature - 32) * 5) / 9
                    ),
                    isCelcius: true,
                  });
                }
              }}
            >
              &#176;C
            </button>
            <button
              className={this.state.isCelcius ? "" : "button-active"}
              onClick={() => {
                if (!this.state.isCelcius) {
                  return;
                } else {
                  this.setState({
                    temparature: Math.round(
                      (this.state.temperature * 9) / 5 + 32
                    ),
                    isCelcius: false,
                  });
                }
              }}
            >
              &#176;F
            </button>
          </div>
          <div className="forecast-list">
            <FutureList forecastList={this.state.forecastList} isCelcius={this.state.isCelcius}></FutureList>
          </div>
          <h1 style={{ color: '#fff', margin: '20px 0' }}>Today's Hightlights</h1>
          <HightlightList windStatus={this.state.windStatus}
            humidity={this.state.humidity}
            visibility={this.state.visibility}
            airPressure={this.state.airPerssure}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
