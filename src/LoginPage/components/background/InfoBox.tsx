import './style.css';
import { FiThermometer } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { InfoBoxAnimation, InfoBoxLineAnimation, DotAnimation } from '../animations';

const InfoBox = () => {
  return (
    <div className='InfoBox-container'>
      <div className='InfoBox-extension'>
        <motion.div {...DotAnimation} className='InfoBox-dot'></motion.div>
        <motion.div {...InfoBoxLineAnimation} className='InfoBox-line'></motion.div>
      </div>

      <motion.div {...InfoBoxAnimation} className='InfoBox-box'>
        <div className='InfoBox-box-icon'>
          <FiThermometer size={24} color='#fff' />
        </div>
        <div className='InfoBox-box-text'>
          <p>Temperature</p>
          <h3>18° - 22°</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default InfoBox;
