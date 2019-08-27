import React from 'react';

import logo from '../../assets/images/logo.png';
import { FadeInTop } from '../../common/animations/Animations';

const Header = ({ animationState }) => (
  <FadeInTop className="header" pose={animationState ? 'visible' : 'hidden'}>
    <FadeInTop
      animationDelay={300}
      className="container header__container"
      pose={animationState ? 'visible' : 'hidden'}
    >
      <img alt="Weather App Logo" className="header__logo" src={logo} />
    </FadeInTop>
  </FadeInTop>
);

export default Header;
