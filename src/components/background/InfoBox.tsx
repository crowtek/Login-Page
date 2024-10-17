import './style.css';
import { FiThermometer } from 'react-icons/fi';

const InfoBox = () => {
  return (
    <div className='InfoBox-container'>
      <div className='InfoBox-extension'>
        <div className='InfoBox-dot'></div>
        <div className='InfoBox-line'></div>
      </div>
      <div className='InfoBox-box'>
        <div className='InfoBox-box-icon'>
          <FiThermometer size={24} color='#fff' />
        </div>
        <div className='InfoBox-box-text'>
          <p>Temperature</p>
          <h3>18° - 22°</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
