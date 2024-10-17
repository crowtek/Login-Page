import InfoBox from './InfoBox';
import StatBox from './StatBox';
import './style.css';

const Background = () => {
  return (
    <div className='background-container'>
      <InfoBox />
      <StatBox />
    </div>
  );
};

export default Background;
