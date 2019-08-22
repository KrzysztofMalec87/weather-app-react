import React from 'react';

const WeatherDetails = ({ data }) => {
  const { cod } = data;
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
    main: { humidity, pressure, temp, temp_max, temp_min },
    wind: { speed },
    sys: { country },
  } = data;

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
      </div>
    </div>
  );
};

export default WeatherDetails;
