import { useState } from 'react';
import SocialLogins from './SocialLogins';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import './style.css';

const AuthFormContainer = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = () => setIsLoginMode((prev) => !prev);

  const formTitle = isLoginMode ? 'Login' : 'Create an Account';
  const toggleCTA = isLoginMode ? 'Create Account' : 'Log in';
  const switchText = isLoginMode ? '' : 'Already have an account?';

  return (
    <section className='auth-form--container'>
      <h1>{formTitle}</h1>

      <SocialLogins />

      <h3>or</h3>

      {isLoginMode ? <LoginForm /> : <RegisterForm />}

      <div className='text-container'>
        {switchText && <p>{switchText}</p>}

        <button className='toggle-button' onClick={toggleMode}>
          {toggleCTA}
        </button>
      </div>
    </section>
  );
};

export default AuthFormContainer;
