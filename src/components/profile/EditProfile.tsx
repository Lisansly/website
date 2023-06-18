import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import TextInput, { TextInputProps } from "../TextInput";
import { Group, Paper, Tabs, createStyles } from "@mantine/core";
import { useAuthUser } from "react-auth-kit";
import { useState } from "react";
import Button from "../Button";

type EditProfileProps = {
  name: string;
  email: string;
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

const EditProfile = () => {
  const userData = useAuthUser();
  const { classes } = useStyles();

  const form = useForm<EditProfileProps>({
    initialValues: {
      name: userData()?.name,
      email: userData()?.email,
    },
    validate: {
      name: isNotEmpty("Name is required"),
      email: isEmail("Email must be valid"),
    },
    validateInputOnChange: true,
  });

  const textInputs: TextInputProps[] = [
    {
      placeholder: "New name",
      label: "Name",
      validation: form.getInputProps("name"),
    },
    {
      placeholder: "example@mail.com",
      label: "Email",
      validation: form.getInputProps("email"),
    },
  ];

  const onSubmit = (values: EditProfileProps) => {
    console.log(values);
  };

  const [loading] = useState<boolean>(false);
  return (
    <Tabs.Panel value="edit" pt="xs">
      <Group position="center" mt="xl">
        <Paper
          onSubmit={form.onSubmit((values) => onSubmit(values))}
          className={classes.paper}
          component="form"
          withBorder
        >
          {textInputs.map((input) => (
            <TextInput
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

export default EditProfile;
