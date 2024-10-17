import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SocialButtons, buttonVariants } from '../animations';

const handleFacebookLogin = () => {
  console.log('Facebook login');
};

const handleGoogleLogin = () => {
  console.log('Google login');
};

const handleAppleLogin = () => {
  console.log('Apple login');
};

const SocialLogins = () => {
  return (
    <motion.div className='auth-form--socials-container' variants={SocialButtons} initial='hidden' animate='visible'>
      <motion.button variants={buttonVariants} onClick={handleFacebookLogin}>
        <FaFacebook size={20} />
      </motion.button>
      <motion.button variants={buttonVariants} onClick={handleGoogleLogin}>
        <FaGoogle size={20} />
      </motion.button>
      <motion.button variants={buttonVariants} onClick={handleAppleLogin}>
        <FaApple size={20} />
      </motion.button>
    </motion.div>
  );
};

export default SocialLogins;
