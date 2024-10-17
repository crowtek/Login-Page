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
