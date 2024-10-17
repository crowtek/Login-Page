import React from 'react';
import { motion, MotionProps } from 'framer-motion';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & MotionProps & { name: string };

const Input: React.FC<InputProps> = ({ name, ...props }) => {
  return <motion.input className='auth-form--input' name={name} placeholder={name} {...props} />;
};

export default Input;
