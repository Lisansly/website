import { Paper, Title, Text, Container } from "@mantine/core";
import PasswordInput from "./PasswordInput";
import { useForm } from "@mantine/form";
import TextInput from "./TextInput";
import { AxiosError } from "axios";
import { useState } from "react";
import Client from "./Client";
import Button from "./Button";
import Link from "../Link";

const textInputs = [
  {
    placeholder: "Your username or email",
    label: "Username or email",
    key: "username",
  },
];

const passwordInputs = [
  {
    placeholder: "Your password",
    label: "Password",
    key: "password",
  },
];

export type LoginBody = {
  username?: string;
  password: string;
  email?: string;
};

export default function Login() {
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginBody>({
    initialValues: {
      username: "",
      password: "",
    },

    validate: (values) => ({
      username: values.username === "" ? "Username is required" : null,
      password: values.password === "" ? "Password is required" : null,
    }),
  });

  const loginRequest = async (values: LoginBody) => {
    const body = {
      [/\S+@\S+/.test(values.username!) ? "email" : "username"]:
        values.username,
      password: values.password,
    };
    var response = await Client.login(body);
    if (response instanceof AxiosError) {
    } else {
    }
  };

  return (
    <Container size={420} my={40}>
      <Title align="center" fw={900}>
        Welcome to Lisansly!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet? <Link path="/signup">Sign Up</Link>
      </Text>
      <Paper
        onSubmit={form.onSubmit(async (values) => {
          setLoading(true);
          await loginRequest(values);
          setLoading(false);
        })}
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
