import { Paper, Title, Text, Container, useMantineTheme } from "@mantine/core";
import PasswordInput from "../components/auth/PasswordInput";
import TextInput from "../components/auth/TextInput";
import Button from "../components/auth/Button";
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
        <TextInput
          placeholder="Username"
          label="Username"
          required={true}
          mb="md"
        />
        <PasswordInput
          placeholder="Your password"
          label="Password"
          required={true}
          mb="md"
        />
        <Button fullWidth={true} mt="xl" radius="md" label="Login" />
      </Paper>
    </Container>
  );
}
