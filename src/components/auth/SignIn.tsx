import { Link, useNavigate } from "react-router-dom";
import AuthClient from "../../clients/AuthClient";
import PasswordInput, { PasswordInputProps } from "../PasswordInput";
import Notification from "../Notification";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useForm } from "@mantine/form";
import TextInput, { TextInputProps } from "../TextInput";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Button from "../Button";
import { Paper, Title, Text, Container } from "@mantine/core";

const textInputs: TextInputProps[] = [
  {
    placeholder: "Your username or email",
    label: "Username or email",
    key: "identifier",
  },
];

const passwordInputs: PasswordInputProps[] = [
  {
    placeholder: "Your password",
    label: "Password",
    key: "password",
  },
];

export type SignInPathParam = {
  identifier: string;
  password: string;
};

export default function SignIn() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated() && navigate("/");
  }, []);

  const [loading, setLoading] = useState(false);
  const signIn = useSignIn();

  const form = useForm<SignInPathParam>({
    initialValues: {
      identifier: "",
      password: "",
    },

    validate: (values) => ({
      identifier:
        values.identifier === ""
          ? "Username or email is required"
          : values.identifier.length < 3
          ? "This field must be at least 3 characters"
          : null,
      password:
        values.password === ""
          ? "Password is required"
          : values.password.length < 10
          ? "Password must be at least 10 characters"
          : null,
    }),
    validateInputOnChange: true,
  });

  const onSubmit = async (values: SignInPathParam) => {
    setLoading(true);
    var response = await AuthClient.signIn(values);
    if (response instanceof AxiosError) {
      if (response.response?.status === 500) {
        Notification.error("Please try again later");
      } else {
        let identifier = "username";
        if (/^\S+@\S+$/.test(form.values.identifier)) {
          identifier = "email";
        }
        Notification.error("Wrong " + identifier + " or password");
      }
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
    <Container size={420} my={40}>
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
