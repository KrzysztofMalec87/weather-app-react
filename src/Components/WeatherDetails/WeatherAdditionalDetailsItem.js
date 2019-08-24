import React from 'react';

import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { FadeInTop } from '../../common/Animations/Animations';

const WeatherAdditionalDetailsItem = ({ data, delay }) => {
  const {
    dt_txt,
    main: { temp, humidity },
    weather: [{ description, icon }],
  } = data;

  return (
    <FadeInTop
      animationDelay={delay}
      pose="visible"
      className="col-12 col-sm-6 col-md-4 col-lg-2"
      initialPose="hidden"
    >
      <div className="weather-additional-details-item">
        <WeatherIcon
          icon={icon}
          description={description}
          additionalClass="weather-additional-details-item__icon"
        />
        <div className="weather-additional-details-item__item">{dt_txt}</div>
        <div className="weather-additional-details-item__item">
          <b>Temprature:</b> {temp} °C
        </div>
        <div className="weather-additional-details-item__item">
          <b>Humidity:</b> {humidity} %
        </div>
        <div className="weather-additional-details-item__item">
          <b>Clouds:</b> {description}
        </div>
      </div>
    </FadeInTop>
  );
};

export default WeatherAdditionalDetailsItem;
