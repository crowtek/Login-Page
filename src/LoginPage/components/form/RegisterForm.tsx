import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from './Input';

interface RegisterFormInputs {
  fullName: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log(data); // Replace with actual submit logic
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('fullName', { required: 'Full Name is required' })} placeholder='Full Name' />
      {errors.fullName && <div className='form-error'>{errors.fullName.message}</div>}

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
          required: 'Password is required',
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
        Start
      </button>
    </form>
  );
};

export default RegisterForm;
