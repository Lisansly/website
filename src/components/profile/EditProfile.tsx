import { Group, Paper, Tabs } from "@mantine/core";
import Helper from "../Helper";
import TextInput, { TextInputProps } from "../TextInput";
import Button from "../Button";
import { useState } from "react";

const textInputs: TextInputProps[] = [
  {
    placeholder: "New username",
    label: "Username",
    key: "name",
  },
  {
    placeholder: "example@mail.com",
    label: "Email",
    key: "email",
  },
];

const EditProfile = () => {
  const [loading] = useState(false);
  return (
    <Tabs.Panel value="editProfile" pt="xs">
      <Group position="center" mt={"xl"} spacing={"xl"}>
        <Helper />
        <Paper p="md" withBorder radius={"lg"} maw={"400px"} w={"100%"}>
          {textInputs.map((input) => (
            <TextInput
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
