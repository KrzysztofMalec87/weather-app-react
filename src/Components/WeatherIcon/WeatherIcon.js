import React from 'react';

const WeatherIcon = ({ icon, description, additionalClass }) => {
  const imageLink = require(`../../assets/images/icons/${icon}.png`);
  const iconClass = additionalClass
    ? `weather-image ${additionalClass}`
    : 'weather-image';

  return <img alt={description} className={iconClass} src={imageLink} />;
};

export default WeatherIcon;
