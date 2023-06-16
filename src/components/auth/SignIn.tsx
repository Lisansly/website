import { SignInPathParams } from "../../clients/auth/Types";
import { PasswordInputProps } from "../PasswordInput";
import SignForm, { handleSuccess } from "./SignForm";
import { useForm, isNotEmpty } from "@mantine/form";
import AuthClient from "../../clients/auth/Client";
import { TextInputProps } from "../TextInput";
import Notification from "../Notification";

const textInputs: TextInputProps[] = [
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
];

export default function SignIn() {
  const notification: Notification = new Notification();
  const authClient: AuthClient = new AuthClient();

  const form = useForm<SignInPathParams>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isNotEmpty("Email is required"),
      password: isNotEmpty("Password is required"),
    },
    validateInputOnChange: true,
  });

  const onSubmit = async (values: SignInPathParams) => {
    var response = await authClient.signIn(values);
    if (response.statusCode !== 200) {
      notification.error(
        response.statusCode === 401
          ? "Wrong email or password"
          : "Please try again later"
      );
    } else {
      handleSuccess(response.accessToken!, response.refreshToken!);
    }
  };

  return (
    <SignForm
      description="Do not have an account yet?"
      passwordInputs={passwordInputs}
      title="Welcome to Lisansly!"
      descriptionLink="/signup"
      textInputs={textInputs}
      buttonText="Sign In"
      onSubmit={onSubmit}
      linkText="Sign Up"
      key="signin"
      form={form}
    />
  );
}
