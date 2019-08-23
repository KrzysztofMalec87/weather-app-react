import React from 'react';

import { FadeInTop } from '../../common/Animations/Animations';

const Footer = ({ stateAnimation }) => {
  return (
    <FadeInTop animationDelay={400} className="footer" pose={stateAnimation ? 'visible' : 'hidden'}>
      <footer className="container">
        App by Krzysztof Malec | www.krzysztofmalec.com
      </footer>
    </FadeInTop>
  );
};

export default Footer;
