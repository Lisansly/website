import { Paper, Title, Text, Container } from "@mantine/core";
import Client from "../../clients/AuthClient";
import PasswordInput from "./PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import TextInput from "./TextInput";
import { AxiosError } from "axios";
import { useState } from "react";
import Button from "./Button";
import Notification from "../Notification";
import { useSignIn } from "react-auth-kit";

const textInputs = [
  {
    placeholder: "Your username or email",
    label: "Username or email",
    key: "identifier",
  },
];

const passwordInputs = [
  {
    placeholder: "Your password",
    label: "Password",
    key: "password",
  },
];

export type LoginPathParam = {
  identifier: string;
  password: string;
};

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = useSignIn();

  const form = useForm<LoginPathParam>({
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
          : values.password.length < 6
          ? "Password must be at least 6 characters"
          : null,
    }),
    validateInputOnChange: true,
  });

  const onSubmit = async (values: LoginPathParam) => {
    setLoading(true);
    var response = await Client.login(values);
    if (response instanceof AxiosError) {
      let identifier = "username";
      if (/^\S+@\S+$/.test(form.values.identifier)) {
        identifier = "email";
      }
      Notification.error("Wrong " + identifier + " or password");
    } else {
      const accessToken = response.data.accessToken;
      //const refreshToken = response.data.refreshToken;
      const decodedAccessToken = JSON.parse(atob(accessToken.split(".")[1]));
      //const decodedRefreshToken = JSON.parse(atob(refreshToken.split(".")[1]));

      signIn({
        token: accessToken,
        expiresIn: decodedAccessToken.exp,
        tokenType: "Bearer",
        /*
        refreshToken: refreshToken,
        refreshTokenExpireIn: decodedRefreshToken.exp,
        */
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
            validation={form.getInputProps(input.key)}
            placeholder={input.placeholder}
            label={input.label}
            key={input.label}
          />
        ))}
        {passwordInputs.map((input) => (
          <PasswordInput
            validation={form.getInputProps(input.key)}
            placeholder={input.placeholder}
            label={input.label}
            key={input.label}
          />
        ))}
        <Button loading={loading} label="Login" />
      </Paper>
    </Container>
  );
}
