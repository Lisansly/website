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

export default function Login() {
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
        Welcome to Lisansly!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        <Link
          to={"/signup"}
          style={{
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          }}
        >
          Create account
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
        <Button fullWidth mt="xl" radius={"md"}>
          Login
        </Button>
      </Paper>
    </Container>
  );
}
