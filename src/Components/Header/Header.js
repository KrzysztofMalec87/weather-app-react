import React from 'react';
import logo from '../../Assets/Images/logo.png';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="container header__container">
      <img className="header__logo" src={logo} alt="Weather App Logo" />
    </div>
  </header>
);

export default Header;
