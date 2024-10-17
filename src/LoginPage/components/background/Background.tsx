import InfoBox from './InfoBox';
import StatBox from './StatBox';
import Label from './Label';
import { motion } from 'framer-motion';
import './style.css';

const Background = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 20 }}
      className='background-container'>
      <InfoBox />
      <StatBox />
      <Label />
    </motion.div>
  );
};

export default Background;
