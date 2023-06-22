import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { TextInputProps } from "../TextInput";
import UpdateForm from "./UpdateForm";
import { Tabs } from "@mantine/core";
import UserClient from "../../clients/user/Client";
import { authenticate } from "../auth/SignIn";
import {
  AuthStateUserObject,
  signInFunctionParams,
} from "react-auth-kit/dist/types";
import Notification from "../Notification";

type EditProfileProps = {
  signIn: (signInConfig: signInFunctionParams) => boolean;
  userData: () => AuthStateUserObject | null;
  notification: Notification;
  userClient: UserClient;
};

type EditProfileFormProps = {
  name: string;
  email: string;
};

const EditProfile = (props: EditProfileProps) => {
  const form = useForm<EditProfileFormProps>({
    initialValues: {
      name: props.userData()?.name,
      email: props.userData()?.email,
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

  const onSubmit = async (values: EditProfileFormProps) => {
    let body = {};
    if (values.name !== props.userData()?.name) {
      body = { ...body, name: values.name };
    }
    if (values.email !== props.userData()?.email) {
      body = { ...body, email: values.email };
    }
    const response = await props.userClient.update(body);
    if (response.statusCode === 200) {
      authenticate({
        tokens: response,
        signIn: props.signIn,
      });
      props.notification.success("Profile updated");
    } else {
      // TODO: handle errors
      props.notification.error("Please try again");
    }
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
