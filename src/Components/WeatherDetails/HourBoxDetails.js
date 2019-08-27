import React, { Component } from 'react';

import ErrorMessage from '../errorMessage/ErrorMessage';
import HourBox from './HourBox';
import { FadeInTop } from '../../common/animations/Animations';

class HourBoxDetails extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    this.setState({ active: true });
  }

  render() {
    const { active } = this.state;
    const { data } = this.props;

    return (
      <>
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
      </>
    );
  }
}

export default HourBoxDetails;
