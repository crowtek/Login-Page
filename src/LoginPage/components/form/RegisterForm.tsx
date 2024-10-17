import React, { useState } from 'react';
import Input from './Input'; // Assuming this is a controlled component

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit logic
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <Input name='fullName' value={formData.fullName} onChange={handleChange} placeholder='Full Name' required />
      <Input name='email' type='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
      <Input
        name='password'
        type='password'
        value={formData.password}
        onChange={handleChange}
        placeholder='Password'
        required
      />
      <button className='auth-form--button' type='submit'>
        Start
      </button>
    </form>
  );
};

export default RegisterForm;
