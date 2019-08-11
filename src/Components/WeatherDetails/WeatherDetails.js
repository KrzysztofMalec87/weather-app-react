import React from 'react';
import './WeatherDetails.scss';

const WeatherDetails = ({ apiRequestData }) => {
  const { cod } = apiRequestData;
  const locationNotFound = cod !== 200 ? true : false;

  if (locationNotFound) {
    return (
      <div className="weather-details">
        <div className="weather-details__message alert alert-danger">
          Sorry, we didn't find the location
        </div>
      </div>
    );
  }

  const {
    name,
    main: { temp, temp_max, temp_min, humidity, pressure },
    wind: { speed },
    sys: { country },
  } = apiRequestData;

  return (
    <div className="weather-details">
      <div className="weather-details__message alert alert-success">
        Weather data for the location: <b>{name}</b>
      </div>
      <div className="weather-details__container">
        <div className="weather-details__icon"></div>
        <div className="weather-details__data">
          <div className="weather-details__item">
            <b>Country:</b> {country}
          </div>
          <div className="weather-details__item">
            <b>Location:</b> {name}
          </div>
          <div className="weather-details__item">
            <b>Temprature:</b> {(temp / 10).toFixed(2)} °C
          </div>
          <div className="weather-details__item">
            <b>Minimum temprature:</b> {(temp_min / 10).toFixed(2)} °C
          </div>
          <div className="weather-details__item">
            <b>Maximum temprature:</b> {(temp_max / 10).toFixed(2)} °C
          </div>
          <div className="weather-details__item">
            <b>Wind speed:</b> {speed} m/s
          </div>
          <div className="weather-details__item">
            <b>Humidity:</b> {humidity} %
          </div>
          <div className="weather-details__item">
            <b>Humidity:</b> {pressure} hPa
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
