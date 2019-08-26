import React from 'react';

import logo from '../../assets/images/logo.png';
import { FadeInTop } from '../../common/Animations/Animations';

const Header = ({ animationState }) => {
  return (
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
};

export default Header;
