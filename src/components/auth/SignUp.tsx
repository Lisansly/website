import { isNotEmpty, hasLength, useForm, isEmail } from "@mantine/form";
import { useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import AuthClient from "../../clients/AuthClient";
import PasswordInput from "../PasswordInput";
import { useEffect, useState } from "react";
import Notification from "../Notification";
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
import { useDebouncedState } from "@mantine/hooks";

export type SignUpProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

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

export default function SignUp() {
  const [name, setName] = useDebouncedState("", 1000);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = useSignIn();

  const form = useForm<SignUpProps>({
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

  useEffect(() => {
    setName(form.values.name);
  }, [form.values.name]);

  const onSubmit = async (values: SignUpProps) => {
    setLoading(true);
    var response = await AuthClient.signUp(values);
    if (response instanceof AxiosError) {
      Notification.error(
        response.response?.status === 409
          ? "Email already used"
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
    <Container size={420} my={15} mih="100vh">
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
        <Avatar size="8em" mb="xl" name={name} />
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
