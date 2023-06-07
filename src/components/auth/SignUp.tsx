import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import AuthClient from "../../clients/AuthClient";
import { useEffect, useState } from "react";
import Notification from "../Notification";
import PasswordInput from "../PasswordInput";
import { useForm } from "@mantine/form";
import TextInput from "../TextInput";
import { AxiosError } from "axios";
import Button from "../Button";
import Avatar from "../Avatar";
import {
  PasswordInputProps,
  TextInputProps,
  Container,
  Paper,
  Title,
  Text,
} from "@mantine/core";

export type SignUpBody = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const textInputs: TextInputProps[] = [
  {
    placeholder: "Your username",
    label: "Username",
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

export default function SignUp() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated() && navigate("/");
  }, []);

  const [loading, setLoading] = useState(false);
  const signIn = useSignIn();

  const form = useForm<SignUpBody>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: (values) => ({
      name:
        values.name === ""
          ? "Username is required"
          : values.name.length < 3
          ? "Username must be at least 3 characters"
          : null,
      email:
        values.email === ""
          ? "Email is required"
          : !/^\S+@\S+$/.test(values.email)
          ? "Email is invalid"
          : null,
      password:
        values.password === ""
          ? "Password is required"
          : values.password.length < 10
          ? "Password must be at least 10 characters"
          : null,
      confirmPassword:
        values.confirmPassword === ""
          ? "Confirm password is required"
          : values.confirmPassword !== values.password
          ? "Confirm password must be the same as password"
          : null,
    }),
    validateInputOnChange: true,
  });

  const onSubmit = async (values: SignUpBody) => {
    setLoading(true);
    var response = await AuthClient.signUp(values);
    if (response instanceof AxiosError) {
      if (response.response?.status === 500) {
        Notification.error("Please try again later");
      }
      // TODO: Handle other errors
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
        Create an account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do you already have an account? <Link to="/signin">Sign In</Link>
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
        <Avatar size="8em" mb="xl" username={form.values.name} />
        {textInputs.map((input) => (
          <TextInput
            validation={form.getInputProps(input.key as string)}
            placeholder={input.placeholder as string}
            label={input.label as string}
            key={input.key as string}
          />
        ))}
        {passwordInputs.map((input) => (
          <PasswordInput
            validation={form.getInputProps(input.key as string)}
            placeholder={input.placeholder as string}
            label={input.label as string}
            key={input.key as string}
          />
        ))}
        <Button label="Sign Up" loading={loading} />
      </Paper>
    </Container>
  );
}
