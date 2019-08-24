import React, { Component } from 'react';

import WeatherAdditionalDetailsItem from './WeatherAdditionalDetailsItem';
import { FadeInTop } from '../../common/Animations/Animations';

class WeatherAdditionalDetails extends Component {
  state = {
    active: false,
    data: null,
  };

  handleStateReachedData = data => {
    this.setState({ data });
  };

  handleStateNotReachedData = () => {
    this.setState({ data: null });
  };

  getAdditionalData = () => {
    const { lat, lon } = this.props;
    const API_ENDPOINT = `${process.env.REACT_APP_WEATHER_API_FORECAST_URL}lat=${lat}&lon=${lon}&cnt=6${process.env.REACT_APP_WEATHER_API_KEY}`;

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => this.handleStateReachedData(json))
      .catch(() => this.handleStateNotReachedData());
  };

  componentDidMount() {
    this.setState({ active: true });
    this.getAdditionalData();
  }

  render() {
    const { active, data } = this.state;

    return (
      <FadeInTop
        animationDelay={100}
        className="weather-additional-details"
        initialPose="hidden"
        pose={active ? 'visible' : 'hidden'}
      >
        {data && (
          <div className="row">
            {data.list.map((data, i) => {
              const delay = 100 * i;
              const key = `tempratureItems${i}`;

              return (
                <WeatherAdditionalDetailsItem
                  data={data}
                  delay={delay}
                  key={key}
                />
              );
            })}
          </div>
        )}
      </FadeInTop>
    );
  }
}

export default WeatherAdditionalDetails;
