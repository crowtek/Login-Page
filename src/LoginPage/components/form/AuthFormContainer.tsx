import { useState } from 'react';
import SocialLogins from './SocialLogins';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import './style.css';

const AuthFormContainer = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className='auth-form--container'>
      {isLoginMode ? <h1>Login</h1> : <h1>Create a Acount</h1>}
      <SocialLogins />
      <h3>or</h3>

      {isLoginMode ? <LoginForm /> : <RegisterForm />}

      <span className='text-container'>
        <p>{isLoginMode ? '' : 'Already have a Account?'}</p>
        <h5 onClick={() => setIsLoginMode((prev) => !prev)}>{isLoginMode ? 'Create Account' : 'Log in'}</h5>
      </span>
    </div>
  );
};

export default AuthFormContainer;
