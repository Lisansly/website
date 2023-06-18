import { SignInPathParams } from "../../clients/auth/Types";
import { PasswordInputProps } from "../PasswordInput";
import SignForm, { handleSuccess } from "./SignForm";
import { useForm, isNotEmpty } from "@mantine/form";
import AuthClient from "../../clients/auth/Client";
import { TextInputProps } from "../TextInput";
import Notification from "../Notification";
import { Group, Text } from "@mantine/core";

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

  const textInputs: TextInputProps[] = [
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
  ];

  const onSubmit = async (values: SignInPathParams) => {
    var response = await authClient.signIn(values);
    if (response.statusCode !== 200) {
      notification.error(
        response.statusCode === 400
          ? "Wrong email or password"
          : "Please try again later"
      );
    } else {
      handleSuccess(response.accessToken!, response.refreshToken!);
    }
  };

  return (
    <SignForm
      passwordInputs={passwordInputs}
      textInputs={textInputs}
      buttonText="Sign In"
      onSubmit={onSubmit}
      form={form}
      afterButton={
        <Group mt={"md"}>
          <Text size={"xs"} ml={"auto"}>
            <a href="/">Forgot your password?</a>
          </Text>
        </Group>
      }
    />
  );
}
