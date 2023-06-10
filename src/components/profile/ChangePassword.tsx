import PasswordInput, { PasswordInputProps } from "../PasswordInput";
import { Group, Paper, Tabs } from "@mantine/core";
import { useState } from "react";
import Helper from "../Helper";
import Button from "../Button";

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

const ChangePassword = () => {
  const [loading] = useState(false);

  return (
    <Tabs.Panel value="change-password" pt="xs">
      <Group position="center" mt="xl">
        <Helper />
        <Paper p="md" m="xs" withBorder radius="md" maw="400px" w="100%">
          {passwordInputs.map((input) => (
            <PasswordInput
              placeholder={input.placeholder as string}
              label={input.label as string}
              key={input.key}
            />
          ))}
          <Button loading={loading} label="Save" />
        </Paper>
      </Group>
    </Tabs.Panel>
  );
};

export default ChangePassword;
