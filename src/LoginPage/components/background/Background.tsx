import InfoBox from './InfoBox';
import StatBox from './StatBox';
import Label from './Label';
import './style.css';

const Background = () => {
  return (
    <div className='background-container'>
      <InfoBox />
      <StatBox />
      <Label />
    </div>
  );
};

export default Background;
