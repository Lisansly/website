import { Paper, Title, Text, Container } from "@mantine/core";
import PasswordInput from "./PasswordInput";
import TextInput from "./TextInput";
import Button from "./Button";
import Link from "../Link";

const textInputs = [
  {
    label: "Username",
    placeholder: "Your username",
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
  return (
    <Container size={420} my={40}>
      <Title align="center" fw={900}>
        Create an account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do you already have an account? <Link label="Login" path="/login" />
      </Text>
      <Paper withBorder shadow="sm" p={30} mt={30} radius="lg">
        {textInputs.map((input) => (
          <TextInput
            placeholder={input.placeholder}
            required={input.required}
            label={input.label}
            mb="md"
          />
        ))}
        {passwordInputs.map((input) => (
          <PasswordInput
            placeholder={input.placeholder}
            required={input.required}
            label={input.label}
            mb="md"
          />
        ))}
        <Button fullWidth={true} mt="xl" radius="md" label="Sign Up" />
      </Paper>
    </Container>
  );
}
