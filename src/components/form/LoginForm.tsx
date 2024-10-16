import Input from './Input';

const LoginForm = () => {
  return (
    <div className='auth-form'>
      <Input name='Email' />
      <Input name='Passwort' />
      <button className='auth-form--button'>Login</button>
    </div>
  );
};

export default LoginForm;
