import { Paper, Title, Text, Container } from "@mantine/core";
import PasswordInput from "./PasswordInput";
import TextInput from "./TextInput";
import Button from "./Button";
import Avatar from "../Avatar";
import Link from "../Link";

const textInputs = [
  {
    placeholder: "Your username",
    label: "Username",
  },
  {
    placeholder: "example@mail.com",
    label: "Email",
  },
];

const passwordInputs = [
  {
    placeholder: "Your password",
    label: "Password",
  },
  {
    placeholder: "Confirm your password",
    label: "Confirm Password",
  },
];

export default function SignUp() {
  return (
    <Container size={420} my={40}>
      <Title align="center" fw={900}>
        Create an account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do you already have an account? <Link path="/login">Login</Link>
      </Text>
      <Paper withBorder shadow="sm" p={30} mt={30} radius="lg">
        <Avatar size="8em" mb="xl" />
        {textInputs.map((input) => (
          <TextInput
            placeholder={input.placeholder}
            label={input.label}
            key={input.label}
          />
        ))}
        {passwordInputs.map((input) => (
          <PasswordInput
            placeholder={input.placeholder}
            label={input.label}
            key={input.label}
          />
        ))}
        <Button label="Sign Up" />
      </Paper>
    </Container>
  );
}
