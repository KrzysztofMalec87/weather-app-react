import React from 'react';

import logo from '../../assets/images/logo.png';
import { FadeInTop } from '../../common/Animations/Animations';

const Header = ({ stateAnimation }) => (
  <FadeInTop className="header" pose={stateAnimation ? 'visible' : 'hidden'}>
    <FadeInTop
      animationDelay={300}
      className="container header__container"
      pose={stateAnimation ? 'visible' : 'hidden'}
    >
      <img alt="Weather App Logo" className="header__logo" src={logo} />
    </FadeInTop>
  </FadeInTop>
);

export default Header;
