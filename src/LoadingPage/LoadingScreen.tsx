import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css'; // We'll add this CSS below

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 20); // Increase progress every 20ms

    return () => clearInterval(interval);
  }, []);

  const circleVariants = {
    hidden: { strokeDashoffset: 283 },
    visible: {
      strokeDashoffset: 283 * (1 - progress / 100),
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className='loading-screen'>
      <div className='loading-ring'>
        <motion.svg width='100' height='100' viewBox='0 0 100 100'>
          <circle cx='50' cy='50' r='45' stroke='#e0e0e0' strokeWidth='10' fill='none' />
          <motion.circle
            cx='50'
            cy='50'
            r='45'
            stroke='#3b6452'
            strokeWidth='10'
            fill='none'
            strokeDasharray='283'
            strokeDashoffset='283'
            strokeLinecap='round'
            variants={circleVariants}
            initial='hidden'
            animate='visible'
          />
        </motion.svg>
        <div className='loading-percentage'>{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
