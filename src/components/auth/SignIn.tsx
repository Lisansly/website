import PasswordInput, { PasswordInputProps } from "../PasswordInput";
import { useSignIn } from "react-auth-kit";
import { Paper, Title, Text, Container } from "@mantine/core";
import TextInput, { TextInputProps } from "../TextInput";
import { Link, useNavigate } from "react-router-dom";
import AuthClient from "../../clients/AuthClient";
import { useState } from "react";
import Notification from "../Notification";
import { useForm, isNotEmpty } from "@mantine/form";
import { AxiosError } from "axios";
import Button from "../Button";

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

export type SignInPathParams = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = useSignIn();

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
    setLoading(true);
    var response = await AuthClient.signIn(values);
    if (response instanceof AxiosError) {
      Notification.error(
        response.response?.status === 401
          ? "Wrong email or password"
          : "Please try again later"
      );
    } else {
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
      const decodedAccessToken = JSON.parse(atob(accessToken.split(".")[1]));
      const decodedRefreshToken = JSON.parse(atob(refreshToken.split(".")[1]));

      signIn({
        token: accessToken,
        expiresIn: decodedAccessToken.exp,
        tokenType: "Bearer",
        refreshToken: refreshToken,
        refreshTokenExpireIn: decodedRefreshToken.exp,
        authState: {
          id: decodedAccessToken.sub,
          name: decodedAccessToken.name,
          email: decodedAccessToken.email,
        },
      });
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <Container size={420} my={50} mih="100vh">
      <Title align="center" fw={900}>
        Welcome to Lisansly!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet? <Link to="/signup">Sign Up</Link>
      </Text>
      <Paper
        onSubmit={form.onSubmit((values) => onSubmit(values))}
        component="form"
        shadow="sm"
        radius="lg"
        withBorder
        mt={30}
        p={30}
      >
        {textInputs.map((input) => (
          <TextInput
            validation={form.getInputProps(input.key as string)}
            placeholder={input.placeholder as string}
            label={input.label as string}
            key={input.key}
          />
        ))}
        {passwordInputs.map((input) => (
          <PasswordInput
            validation={form.getInputProps(input.key as string)}
            placeholder={input.placeholder as string}
            label={input.label as string}
            key={input.key}
          />
        ))}
        <Button loading={loading} label="Sign In" />
      </Paper>
    </Container>
  );
}
