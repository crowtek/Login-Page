import { useForm, SubmitHandler } from 'react-hook-form';
import Input from './Input';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data); // Submit logic here
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Invalid email address',
          },
        })}
        placeholder='Email'
        type='email'
      />
      {errors.email && <div className='form-error'>{errors.email.message}</div>}

      <Input
        {...register('password', {
          required: 'Password is invalid',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        })}
        placeholder='Password'
        type='password'
      />
      {errors.password && <div className='form-error'>{errors.password.message}</div>}

      <button className='auth-form--button' type='submit'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
