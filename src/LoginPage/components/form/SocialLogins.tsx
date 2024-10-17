import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogins = () => {
  return (
    <div className='auth-form--socials-container'>
      <button>
        <FaFacebook size={25} />
      </button>
      <button>
        <FcGoogle size={25} />
      </button>
      <button>
        <FaApple size={25} />
      </button>
    </div>
  );
};

export default SocialLogins;
