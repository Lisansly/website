import PasswordInput, { PasswordInputProps } from "../PasswordInput";
import { Group, Paper, Tabs, createStyles } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { useState } from "react";
import Button from "../Button";

type ChangePasswordProps = {
  password: string;
  confirmPassword: string;
};

const useStyles = createStyles((theme) => ({
  paper: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
    margin: theme.spacing.xs,
    padding: theme.spacing.md,
    width: "100%",
    borderRadius: theme.radius.md,
    maxWidth: "400px",
  },
}));

const ChangePassword = () => {
  const [loading] = useState<boolean>(false);
  const { classes } = useStyles();

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

  const passwordInputs: PasswordInputProps[] = [
    {
      placeholder: "New password",
      label: "Password",
      validation: form.getInputProps("password"),
    },
    {
      placeholder: "Confirm new password",
      label: "Confirm Password",
      validation: form.getInputProps("confirmPassword"),
    },
  ];

  const onSubmit = (values: ChangePasswordProps) => {
    console.log(values);
  };

  return (
    <Tabs.Panel value="change-password" pt="xs">
      <Group position="center" mt="xl">
        <Paper
          onSubmit={form.onSubmit((values) => onSubmit(values))}
          className={classes.paper}
          component="form"
          withBorder
        >
          {passwordInputs.map((input) => (
            <PasswordInput
              validation={input.validation}
              placeholder={input.placeholder as string}
              label={input.label as string}
              key={input.label}
            />
          ))}
          <Button loading={loading} fullWidth mt="xl">
            Save
          </Button>
        </Paper>
      </Group>
    </Tabs.Panel>
  );
};

export default ChangePassword;
