import './style.css';
import { motion } from 'framer-motion';
import { StatboxAnimation, StatboxLineAnimation, DotAnimation } from '../animations';

const StatBox = () => {
  return (
    <div className='StatBox-container'>
      <motion.div {...StatboxAnimation} className='StatBox-box'>
        <h3>1,2 km</h3>
        <p>
          left to your <br /> accommodation
        </p>
      </motion.div>
      <div className='InfoBox-extension'>
        <motion.div {...StatboxLineAnimation} className='InfoBox-line'></motion.div>
        <motion.div {...DotAnimation} className='InfoBox-dot'></motion.div>
      </div>
    </div>
  );
};

export default StatBox;
