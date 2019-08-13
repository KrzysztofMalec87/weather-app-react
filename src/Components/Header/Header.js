import React from 'react';
import logo from '../../Assets/Images/logo.png';

const Header = () => (
  <header className="header">
    <div className="container header__container">
      <img alt="Weather App Logo" className="header__logo" src={logo} />
    </div>
  </header>
);

export default Header;
