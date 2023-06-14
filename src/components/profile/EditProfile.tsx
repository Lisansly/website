import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import TextInput, { TextInputProps } from "../TextInput";
import { Group, Paper, Tabs } from "@mantine/core";
import { useAuthUser } from "react-auth-kit";
import { useState } from "react";
import Button from "../Button";

const textInputs: TextInputProps[] = [
  {
    placeholder: "New name",
    label: "Name",
    key: "name",
  },
  {
    placeholder: "example@mail.com",
    label: "Email",
    key: "email",
  },
];

type EditProfileProps = {
  name: string;
  email: string;
};

const EditProfile = () => {
  const userData = useAuthUser();

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

  const onSubmit = (values: EditProfileProps) => {
    console.log(values);
  };

  const [loading] = useState<boolean>(false);
  return (
    <Tabs.Panel value="edit" pt="xs">
      <Group position="center" mt="xl">
        <Paper
          onSubmit={form.onSubmit((values) => onSubmit(values))}
          component="form"
          maw="400px"
          radius="md"
          withBorder
          w="100%"
          p="md"
          m="xs"
        >
          {textInputs.map((input) => (
            <TextInput
              validation={form.getInputProps(input.key as string)}
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

export default EditProfile;
