import posed from 'react-pose';

export const FadeInTop = posed.div({
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, delay: ({ animationDelay }) => animationDelay },
});

export const AnimateDetailsButton = posed.span({
  init: { width: 'auto', bottom: '10px', 'background-color': '#ed8224' },
  clicked: { width: '100%', bottom: '0px', 'background-color': '#d4d4d4' },
});
