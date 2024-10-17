export const slideInVariants = {
  hidden: { x: '-100vw', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export const formContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

export const InfoBoxAnimation = {
  initial: { opacity: 0, x: '5vw' },
  animate: { opacity: 1, x: 0 },
  transition: { type: 'spring', stiffness: 20, delay: 1 },
};
export const InfoBoxLineAnimation = {
  initial: { scaleY: 0, transformOrigin: 'bottom' },
  animate: { scaleY: 1 },
  transition: { type: 'spring', stiffness: 20, damping: 15, delay: 1.5 },
};
export const DotAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1.2 },
  transition: { type: 'spring', stiffness: 300, damping: 10, delay: 3 },
};

export const StatboxAnimation = {
  initial: { opacity: 0, x: '5vw' },
  animate: { opacity: 1, x: 0 },
  transition: { type: 'spring', stiffness: 20, delay: 1.2 },
};
export const StatboxLineAnimation = {
  initial: { scaleY: 0, transformOrigin: 'top' },
  animate: { scaleY: 1 },
  transition: { type: 'spring', stiffness: 20, damping: 15, delay: 1.5 },
};

export const LabelAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: 'spring', stiffness: 300, damping: 10, delay: 2.5 },
};

export const SocialButtons = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

export const buttonVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};
