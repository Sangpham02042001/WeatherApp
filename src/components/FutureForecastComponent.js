import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import "../App.css"
class FutureForeCast extends Component {
  getCelcius(isCelcius) {
    if (isCelcius) return "C";
    else return "F";
  }
  render() {
    return (
      <Card className="forecast-card">
        <CardTitle className="text-center">{this.props.day}</CardTitle>
        <CardImg width="100%" src={this.props.conditionImage} alt="" />
        <div className='forecast-temp'>
          <CardText className="m-0 text-center max-temp">{this.props.bound[0]}&#176;{this.getCelcius(this.props.isCelcius)}</CardText>
          <CardText className="m-0 text-center min-temp">{this.props.bound[1]}&#176;{this.getCelcius(this.props.isCelcius)}</CardText>
        </div>
      </Card>
    );
  }
}

export default FutureForeCast;
