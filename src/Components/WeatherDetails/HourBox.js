import React from 'react';

import WeatherIcon from '../weathericon/WeatherIcon';
import { FadeInTop } from '../../common/animations/Animations';

const HourBox = ({ data, delay }) => {
  const {
    dt_txt,
    main: { humidity, temp },
    weather: [{ description, icon }],
  } = data;

  return (
    <FadeInTop
      animationDelay={delay}
      className="col-12 col-sm-6 col-md-4 col-lg-2"
      initialPose="hidden"
      pose="visible"
    >
      <div className="hour-box-item">
        <WeatherIcon
          additionalClass="hour-box-item__icon"
          description={description}
          icon={icon}
        />
        <div className="hour-box-item__item">{dt_txt}</div>
        <div className="hour-box-item__item">
          <b>Temprature:</b> {temp} °C
        </div>
        <div className="hour-box-item__item">
          <b>Humidity:</b> {humidity} %
        </div>
        <div className="hour-box-item__item">
          <b>Clouds:</b> {description}
        </div>
      </div>
    </FadeInTop>
  );
};

export default HourBox;