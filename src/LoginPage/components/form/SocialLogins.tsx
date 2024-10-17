import { FaFacebook, FaApple } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

const handleFacebookLogin = () => {
  // Facebook login logic here
  console.log('Facebook login');
};

const handleGoogleLogin = () => {
  // Google login logic here
  console.log('Google login');
};

const handleAppleLogin = () => {
  // Apple login logic here
  console.log('Apple login');
};

const SocialLogins = () => {
  return (
    <div className='auth-form--socials-container'>
      <button onClick={handleFacebookLogin}>
        <FaFacebook size={25} />
      </button>
      <button onClick={handleGoogleLogin}>
        <FaGoogle size={25} />
      </button>
      <button onClick={handleAppleLogin}>
        <FaApple size={25} />
      </button>
    </div>
  );
};

export default SocialLogins;
