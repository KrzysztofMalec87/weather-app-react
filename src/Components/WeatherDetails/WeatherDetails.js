import React, { Component } from 'react';

import Button from './WeatherShowMoreLessButton';
import { FadeInTop } from '../../common/Animations/Animations';
import WeatherAdditionalDetails from '../WeatherDetails/WeatherAdditionalDetails';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

class WeatherDetails extends Component {
  state = {
    showAdditionalDetails: false,
    active: false,
  };

  handleAdditionalDetailsState = () => {
    this.setState({
      showAdditionalDetails: !this.state.showAdditionalDetails,
    });
  };

  componentDidMount() {
    this.setState({ active: true });
  }

  render() {
    const { cod } = this.props.data;
    const locationNotFound = cod !== 200 ? true : false;
    const { showAdditionalDetails, active } = this.state;

    if (locationNotFound) {
      return (
        <FadeInTop
          className="weather-details"
          initialPose="hidden"
          pose={active ? 'visible' : 'hidden'}
        >
          <div className="weather-details__message alert alert-danger">
            Sorry, we didn't find the location
          </div>
        </FadeInTop>
      );
    }

    const {
      name,
      main: { humidity, pressure, temp, temp_max, temp_min },
      wind: { speed },
      sys: { country },
      weather: [{ icon, desctiption }],
      coord: { lat, lon },
    } = this.props.data;

    return (
      <>
        <FadeInTop
          className="weather-details"
          initialPose="hidden"
          pose={active ? 'visible' : 'hidden'}
        >
          <div className="weather-details__message alert alert-success">
            Weather data for the location: <b>{name}</b>
          </div>
          <div className="weather-details__container">
            <div className="weather-details__icon">
              <WeatherIcon icon={icon} desctiption={desctiption} />
            </div>
            <div className="weather-details__data">
              <div className="weather-details__item">
                <b>Country:</b> {country}
              </div>
              <div className="weather-details__item">
                <b>Location:</b> {name}
              </div>
              <div className="weather-details__item">
                <b>Temprature:</b> {temp} °C
              </div>
              <div className="weather-details__item">
                <b>Minimum temprature:</b> {temp_min} °C
              </div>
              <div className="weather-details__item">
                <b>Maximum temprature:</b> {temp_max} °C
              </div>
              <div className="weather-details__item">
                <b>Wind speed:</b> {speed} m/s
              </div>
              <div className="weather-details__item">
                <b>Humidity:</b> {humidity} %
              </div>
              <div className="weather-details__item">
                <b>Pressure:</b> {pressure} hPa
              </div>
            </div>
            <Button changeParentState={this.handleAdditionalDetailsState} />
          </div>
        </FadeInTop>
        {showAdditionalDetails && (
          <WeatherAdditionalDetails
            formState={showAdditionalDetails}
            lat={lat}
            lon={lon}
          />
        )}
      </>
    );
  }
}

export default WeatherDetails;
