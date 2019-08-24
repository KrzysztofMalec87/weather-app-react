import React, { Component } from 'react';

import { AnimateDetailsButton } from '../../common/Animations/Animations';

class Button extends Component {
  state = {
    active: false,
  };

  handleActiveState = () => {
    this.setState({ active: !this.state.active });
    this.props.changeParentState();
  };

  render() {
    const { active } = this.state;

    return (
      <AnimateDetailsButton
        onClick={this.handleActiveState}
        pose={active ? 'clicked' : 'init'}
        className="weathet-details-button"
      >
        {active ? 'Hide hours' : 'Show hours'}
      </AnimateDetailsButton>
    );
  }
}

export default Button;
