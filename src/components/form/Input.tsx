const Input: React.FC<{ name: string }> = ({ name }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={name}
      style={{
        backgroundColor: "rgb(228 220 220)",
        border: "none",
        borderRadius: 25,
        color: "black",
        padding: 20,
      }}
    />
  );
};

export default Input;
