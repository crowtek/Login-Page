const SubmitButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button
      style={{ border: "none", borderRadius: 25, backgroundColor: "#3B6452" }}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
