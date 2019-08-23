import posed from 'react-pose';

export const FadeInTop = posed.div({
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, delay: ({ animationDelay }) => animationDelay },
});
