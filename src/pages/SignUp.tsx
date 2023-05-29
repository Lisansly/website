import { Paper, Title, Text, Container, useMantineTheme } from "@mantine/core";
import PasswordInput from "../components/auth/PasswordInput";
import TextInput from "../components/auth/TextInput";
import Button from "../components/auth/Button";
import { Link } from "react-router-dom";

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
