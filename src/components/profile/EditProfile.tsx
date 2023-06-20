import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { TextInputProps } from "../TextInput";
import { useAuthUser } from "react-auth-kit";
import UpdateForm from "./UpdateForm";
import { Tabs } from "@mantine/core";

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

  return (
    <Tabs.Panel value="edit">
      <UpdateForm
        textInputs={textInputs}
        onSubmit={onSubmit}
        key={"edit"}
        form={form}
      />
    </Tabs.Panel>
  );
};

export default EditProfile;
