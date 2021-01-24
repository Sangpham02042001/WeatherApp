import React, { Component } from "react";
import FutureForeCast from "./FutureForecastComponent";
import * as WeatherConditon from "../shared/weatherCondition";
import { getDate } from "../shared/DayandMonth";
class FutureList extends Component {
  getTempFromKelvin(day) {
    if (this.props.isCelcius) {
      return [Math.round(day.main.temp_min - 273.15), Math.round(day.main.temp_max - 273.15)];
    }
    else {
      return [Math.round(day.main.temp_min * 9 / 5 - 459.67), Math.round(day.main.temp_max * 9 / 5 - 459.67)]
    }

  }
  render() {
    const list = this.props.forecastList.map((day) => {
      return (
        <FutureForeCast
          key={day.dt}
          day={getDate(new Date(day.dt_txt))}
          conditionImage={
            WeatherConditon.weatherCondition.filter(
              (ele) => ele.name === day.weather[0].main.toLowerCase()
              //   forecastList[0]['weather'][0].main.toLowerCase()
            )[0].image
          }
          bound={[this.getTempFromKelvin(day)[0], this.getTempFromKelvin(day)[1]]}
          isCelcius={this.props.isCelcius}
        ></FutureForeCast>
      );
    });
    return <React.Fragment>{list}</React.Fragment>;
  }
}
export default FutureList;
