import React from 'react';

const WeatherIcon = ({ icon, description }) => {
  const imageLink = require(`../../assets/images/icons/${icon}.png`);

  return <img alt={description} className="weather-image" src={imageLink} />;
};

export default WeatherIcon;
