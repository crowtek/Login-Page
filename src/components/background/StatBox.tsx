import './style.css';

const StatBox = () => {
  return (
    <div className='StatBox-container'>
      <div className='StatBox-box'>
        <h3>1,2 km</h3>
        <p>
          left to your <br /> accommodation
        </p>
      </div>
      <div className='InfoBox-extension'>
        <div className='InfoBox-line'></div>
        <div className='InfoBox-dot'></div>
      </div>
    </div>
  );
};

export default StatBox;
