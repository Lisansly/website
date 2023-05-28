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
        <TextInput label="Email" placeholder="example@mail.com" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl" radius={"md"}>
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
}
