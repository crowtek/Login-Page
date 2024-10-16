import React from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { name: string }> = ({ name, ...props }) => {
  return <input className='auth-form--input' type='text' name={name} placeholder={name} {...props} />;
};

export default Input;
