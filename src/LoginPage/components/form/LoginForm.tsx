import React, { useState } from 'react';
import Input from './Input'; // Assuming this is a controlled component

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Sumbit Logic
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <Input name='email' onChange={handleChange} placeholder='Email' />
      <Input name='password' onChange={handleChange} placeholder='Password' />
      <button className='auth-form--button' type='submit'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
