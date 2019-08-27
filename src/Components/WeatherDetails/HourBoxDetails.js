import React, { Component } from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import HourBox from './HourBox';
import { FadeInTop } from '../../common/Animations/Animations';

class HourBoxDetails extends Component {
  state = {
    active: false,
    data: null,
    error: false,
  };

  getAdditionalData = () => {
    const { lat, lon } = this.props;
    const API_ENDPOINT = `${process.env.REACT_APP_WEATHER_API_FORECAST_URL}lat=${lat}&lon=${lon}&cnt=6${process.env.REACT_APP_WEATHER_API_KEY}`;

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => this.setState({ data: json }))
      .catch(() => this.setState({ error: true }));
  };

  componentDidMount() {
    this.setState({ active: true });
    this.getAdditionalData();
  }

  render() {
    const { active, data, error } = this.state;

    return (
      <>
        {error ? (
          <ErrorMessage>
            We are sorry we were unable to download the weather details.
          </ErrorMessage>
        ) : (
          <FadeInTop
            animationDelay={100}
            className="hour-box-details"
            initialPose="hidden"
            pose={active ? 'visible' : 'hidden'}
          >
            {data && (
              <div className="row">
                {data.list.map((data, index) => {
                  const delay = 100 * index;
                  const key = `tempratureItems${index}`;

                  return <HourBox data={data} delay={delay} key={key} />;
                })}
              </div>
            )}
          </FadeInTop>
        )}
      </>
    );
  }
}

export default HourBoxDetails;
