import { Paper, Title, Text, Container } from "@mantine/core";
import PasswordInput from "./PasswordInput";
import TextInput from "./TextInput";
import Button from "./Button";
import Link from "../Link";

export default function Login() {
  return (
    <Container size={420} my={40}>
      <Title align="center" fw={900}>
        Welcome to Lisansly!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet? <Link label="Sign up" path="/signup" />
      </Text>
      <Paper withBorder shadow="sm" p={30} mt={30} radius="lg">
        <TextInput
          placeholder="Your username"
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
