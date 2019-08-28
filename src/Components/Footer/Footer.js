import React from 'react';

import { FadeInTop } from '../../common/animations/Animations';

const Footer = ({ animationState }) => (
  <FadeInTop
    animationDelay={400}
    className="footer"
    pose={animationState ? 'visible' : 'hidden'}
  >
    <footer className="container">
      App by Krzysztof Malec | www.krzysztofmalec.com
    </footer>
  </FadeInTop>
);

export default Footer;
