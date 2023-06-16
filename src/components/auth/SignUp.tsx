import { isNotEmpty, hasLength, useForm, isEmail } from "@mantine/form";
import { PasswordInputProps } from "../PasswordInput";
import SignForm, { handleSuccess } from "./SignForm";
import AuthClient from "../../clients/auth/Client";
import { TextInputProps } from "../TextInput";
import Notification from "../Notification";

const textInputs: TextInputProps[] = [
  {
    placeholder: "Your name",
    label: "Name",
    key: "name",
  },
  {
    placeholder: "example@mail.com",
    label: "Email",
    key: "email",
  },
];

const passwordInputs: PasswordInputProps[] = [
  {
    placeholder: "Your password",
    label: "Password",
    key: "password",
  },
  {
    placeholder: "Confirm your password",
    label: "Confirm Password",
    key: "confirmPassword",
  },
];

type SignUpFormProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const notification: Notification = new Notification();
  const authClient: AuthClient = new AuthClient();

  const form = useForm<SignUpFormProps>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    },
    validateInputOnChange: true,
  });

  const onSubmit = async (values: SignUpFormProps) => {
    var response = await authClient.signUp({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    if (response.statusCode !== 200) {
      notification.error(
        response.statusCode === 409
          ? "Email already used"
          : "Please try again later"
      );
    } else {
      handleSuccess(response.accessToken!, response.refreshToken!);
    }
  };

  return (
    <SignForm
      description="Do you already have an account?"
      passwordInputs={passwordInputs}
      descriptionLink="/signin"
      title="Create a account"
      textInputs={textInputs}
      buttonText="Sign Up"
      onSubmit={onSubmit}
      linkText="Sign In"
      key="signin"
      form={form}
    />
  );
}
