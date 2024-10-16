const Input: React.FC<{ name: string }> = ({ name }) => {
  return <input className='auth-form--input' type='text' name={name} placeholder={name} />;
};

export default Input;
