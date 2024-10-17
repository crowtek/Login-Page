import './style.css';
import { motion } from 'framer-motion';
import { LabelAnimation, DotAnimation } from '../animations';

const Label = () => {
  return (
    <motion.div className='Label-container'>
      <motion.div {...LabelAnimation} className='Label-box'>
        <p>Gringo Trail</p>
      </motion.div>
      <motion.div {...DotAnimation} className='InfoBox-dot'></motion.div>
    </motion.div>
  );
};

export default Label;
