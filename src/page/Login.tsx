import Background from "../components/background/Background";
import AuthFormContainer from "../components/form/AuthFormContainer";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2vw",
        padding: 10,
        overflow: "hidden",
        height: "96vh",
      }}
    >
      <AuthFormContainer />
      <Background />
    </div>
  );
};

export default Login;
