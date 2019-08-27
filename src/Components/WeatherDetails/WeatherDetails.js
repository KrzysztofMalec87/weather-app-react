import React, { Component } from 'react';

import Button from './WeatherShowMoreLessButton';
import HourBoxDetails from './HourBoxDetails';
import WeatherIcon from '../weatherIcon/WeatherIcon';
import { FadeInTop } from '../../common/animations/Animations';

class WeatherDetails extends Component {
  state = {
    active: false,
    data: null,
    error: false,
    showDetails: false,
  };

  componentDidMount() {
    this.setState({ active: true });
  }

  componentDidUpdate(prevProps) {
    const { data: prevData } = prevProps;
    const { data } = this.props;

    if (prevData !== data) {
      this.fetchDetails();
    }
  }

  updateData = () => {
    const { data } = this.props;

    this.setState({ data });
  };

  showDetails = () => {
    this.setState(
      {
        showDetails: true,
      },
      this.fetchDetails
    );
  };

  hideDetails = () => {
    this.setState({
      showDetails: false,
    });
  };

  fetchDetails = () => {
    const {
      data: {
        coord: { lat, lon },
      },
    } = this.props;
    const API_ENDPOINT = `${process.env.REACT_APP_WEATHER_API_FORECAST_URL}lat=${lat}&lon=${lon}&cnt=6${process.env.REACT_APP_WEATHER_API_KEY}`;

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
      })
      .catch(() => this.setState({ error: true }));
  };

  render() {
    const { cod } = this.props.data;
    const locationNotFound = cod !== 200;
    const { active } = this.state;

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
      coord: { lat, lon },
      main: { humidity, pressure, temp, temp_max, temp_min },
      name,
      sys: { country },
      weather: [{ icon, desctiption }],
      wind: { speed },
    } = this.props.data;
    const { data, showDetails } = this.state;

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
              <WeatherIcon desctiption={desctiption} icon={icon} />
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
            <Button
              changeParentState={
                showDetails ? this.hideDetails : this.showDetails
              }
            />
          </div>
        </FadeInTop>
        {showDetails && (
          <HourBoxDetails
            data={data}
            formState={showDetails}
            lat={lat}
            lon={lon}
          />
        )}
      </>
    );
  }
}

export default WeatherDetails;
