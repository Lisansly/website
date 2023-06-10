import PasswordInput, { PasswordInputProps } from "../PasswordInput";
import { Group, Paper, Tabs } from "@mantine/core";
import { useState } from "react";
import Helper from "../Helper";
import Button from "../Button";
import { hasLength, useForm } from "@mantine/form";

const passwordInputs: PasswordInputProps[] = [
  {
    placeholder: "New password",
    label: "Password",
    key: "password",
  },
  {
    placeholder: "Confirm new password",
    label: "Confirm Password",
    key: "confirmPassword",
  },
];

type ChangePasswordProps = {
  password: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const [loading] = useState(false);

  const form = useForm<ChangePasswordProps>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: {
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

  const onSubmit = (values: ChangePasswordProps) => {
    console.log(values);
  };

  return (
    <Tabs.Panel value="change-password" pt="xs">
      <Group position="center" mt="xl">
        <Helper />
        <Paper
          onSubmit={form.onSubmit((values) => onSubmit(values))}
          component="form"
          p="md"
          m="xs"
          withBorder
          radius="md"
          maw="400px"
          w="100%"
        >
          {passwordInputs.map((input) => (
            <PasswordInput
              validation={form.getInputProps(input.key as string)}
              placeholder={input.placeholder as string}
              label={input.label as string}
              key={input.key as string}
            />
          ))}
          <Button loading={loading} label="Save" />
        </Paper>
      </Group>
    </Tabs.Panel>
  );
};

export default ChangePassword;
