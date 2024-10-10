import React from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogins = () => {
  return (
    <div style={styles.container}>
      <button style={{ ...styles.button, backgroundColor: "#1877F2" }}>
        <FaFacebook size={24} color="white" />
      </button>
      <button
        style={{
          ...styles.button,
          backgroundColor: "#FFFFFF",
          border: "1px solid #ddd",
        }}
      >
        <FcGoogle size={24} />
      </button>
      <button style={{ ...styles.button, backgroundColor: "#000000" }}>
        <FaApple size={24} color="white" />
      </button>
    </div>
  );
};

// Inline styles for the buttons and the container
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    outline: "none",
  },
};

export default SocialLogins;
