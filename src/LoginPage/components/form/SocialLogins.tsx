import { FaFacebook, FaApple } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

const SocialLogins = () => {
  return (
    <div className='auth-form--socials-container'>
      <button>
        <FaFacebook size={25} />
      </button>
      <button>
        <FaGoogle size={25} />
      </button>
      <button>
        <FaApple size={25} />
      </button>
    </div>
  );
};

export default SocialLogins;
