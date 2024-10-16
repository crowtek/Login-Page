import Input from './Input';

const RegisterForm = () => {
  return (
    <div className='auth-form'>
      <Input name='Full Name' />
      <Input name='Email' />
      <Input name='Passwort' />
      <button className='auth-form--button'>Start</button>
    </div>
  );
};

export default RegisterForm;
