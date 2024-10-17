import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import Input from './Input';
import { slideInVariants, formContainerVariants } from '../animations';

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
    <motion.form
      className='auth-form'
      onSubmit={handleSubmit(onSubmit)}
      variants={formContainerVariants}
      initial='hidden'
      animate='visible'>
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
        variants={slideInVariants} // Apply sliding animation
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
        variants={slideInVariants} // Apply sliding animation
      />
      {errors.password && <div className='form-error'>{errors.password.message}</div>}

      <motion.button
        className='auth-form--button'
        type='submit'
        variants={slideInVariants} // Apply sliding animation
      >
        Login
      </motion.button>
    </motion.form>
  );
};

export default LoginForm;
