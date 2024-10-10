import Input from "./Input";
import SubmitButton from "./SubmitButton";

const RegisterForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "70%",
      }}
    >
      <Input name="Full Name" />
      <Input name="Email" />
      <Input name="Passwort" />
      <SubmitButton text={"Start"} />
    </div>
  );
};

export default RegisterForm;
