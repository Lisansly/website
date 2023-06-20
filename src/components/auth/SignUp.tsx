import { isNotEmpty, hasLength, useForm, isEmail } from "@mantine/form";
import { PasswordInputProps } from "../PasswordInput";
import AuthClient from "../../clients/auth/Client";
import { Checkbox, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { TextInputProps } from "../TextInput";
import Notification from "../Notification";
import { useSignIn } from "react-auth-kit";
import { authenticate } from "./SignIn";
import SignForm from "./SignForm";

type SignUpFormProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
};

export default function SignUp() {
  const notification = new Notification();
  const authClient = new AuthClient();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const form = useForm<SignUpFormProps>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
    validate: {
      name: isNotEmpty("Name is required"),
      email: isEmail("Email must be valid"),
      password: hasLength(
        { min: 10 },
        "Password must be at least 10 characters"
      ),
      confirmPassword: (value, values) =>
        value.length === 0
          ? "Confirm password is required"
          : value !== values.password
          ? "Passwords must match"
          : null,
      agreement: (value) =>
        value === false ? "You must accept the agreement" : null,
    },
    validateInputOnChange: true,
  });

  const textInputs: TextInputProps[] = [
    {
      placeholder: "Your name",
      validation: form.getInputProps("name"),
      label: "Name",
    },
    {
      placeholder: "example@mail.com",
      validation: form.getInputProps("email"),
      label: "Email",
    },
  ];

  const passwordInputs: PasswordInputProps[] = [
    {
      placeholder: "Your password",
      validation: form.getInputProps("password"),
      label: "Password",
    },
    {
      placeholder: "Confirm your password",
      validation: form.getInputProps("confirmPassword"),
      label: "Confirm Password",
    },
  ];

  const onSubmit = async (values: SignUpFormProps) => {
    var response = await authClient.signUp({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    if (response.statusCode !== 201) {
      notification.error(
        response.statusCode === 409
          ? "Email already used"
          : "Please try again later"
      );
    } else {
      authenticate({ response, signIn, navigate });
    }
  };

  return (
    <SignForm
      passwordInputs={passwordInputs}
      beforeButton={
        <Group>
          <Checkbox
            checked={form.values.agreement}
            {...form.getInputProps("agreement")}
            label="I accept the agreement"
          />
        </Group>
      }
      textInputs={textInputs}
      buttonText="Sign Up"
      onSubmit={onSubmit}
      form={form}
    />
  );
}
