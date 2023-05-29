import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";

type InputProps = {
  label: string;
  placeholder: string;
  required: boolean;
};

const textInput = (props: InputProps) => {
  return (
    <TextInput
      label={props.label}
      placeholder={props.placeholder}
      required={props.required}
      mb={"md"}
    />
  );
};

const passwordInput = (props: InputProps) => {
  return (
    <PasswordInput
      label={props.label}
      placeholder={props.placeholder}
      required={props.required}
      mb={"md"}
    />
  );
};

const textInputs = [
  {
    label: "Username",
    placeholder: "Username",
    required: true,
  },
  {
    label: "Email",
    placeholder: "example@mail.com",
    required: true,
  },
];

const passwordInputs = [
  {
    label: "Password",
    placeholder: "Your password",
    required: true,
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm your password",
    required: true,
  },
];

export default function SignUp() {
  const theme = useMantineTheme();
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Create an account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do you already have an account?{" "}
        <Link
          to={"/login"}
          style={{
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          }}
        >
          Login
        </Link>
      </Text>

      <Paper withBorder shadow="sm" p={30} mt={30} radius="lg">
        {textInputs.map((input) => textInput(input))}
        {passwordInputs.map((input) => passwordInput(input))}
        <Button fullWidth mt={"xl"} radius={"md"}>
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
}
