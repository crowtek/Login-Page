import Input from "./Input";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "70%",
      }}
    >
      <Input name="Email" />
      <Input name="Passwort" />
      <SubmitButton text={"Login"} />
    </div>
  );
};

export default LoginForm;
