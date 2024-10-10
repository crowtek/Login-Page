import { useState } from "react";
import SocialLogins from "./SocialLogins";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

// or
// Form
// login -> regis switch

const AuthFormContainer = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);

  return (
    <div
      style={{
        width: "48vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoginMode ? <h1>Login</h1> : <h1>Create a Acount</h1>}
      <SocialLogins />
      <h3>or</h3>

      {isLoginMode ? <LoginForm /> : <RegisterForm />}

      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <p>Already have a Account?</p>
        <h5
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setIsLoginMode((prev) => !prev)}
        >
          Log in
        </h5>
      </span>
    </div>
  );
};

export default AuthFormContainer;
