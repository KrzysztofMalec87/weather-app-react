import React, { Component } from 'react';

import { AnimateDetailsButton } from '../../common/Animations/Animations';

class Button extends Component {
  state = {
    active: false,
  };

  handleClick = () => {
    this.setState({ active: !this.state.active });
    this.props.changeParentState();
  };

  render() {
    const { active } = this.state;

    return (
      <AnimateDetailsButton
        className="weather-details-button"
        onClick={this.handleClick}
        pose={active ? 'clicked' : 'init'}
      >
        {active ? 'Hide hours' : 'Show hours'}
      </AnimateDetailsButton>
    );
  }
}

export default Button;
