import { PasswordInputProps } from "../PasswordInput";
import { hasLength, useForm } from "@mantine/form";
import UpdateForm from "./UpdateForm";
import { Tabs } from "@mantine/core";
import { authenticate } from "../auth/SignIn";
import UserClient from "../../clients/user/Client";
import { signInFunctionParams } from "react-auth-kit/dist/types";
import Notification from "../Notification";

type ChangePasswordProps = {
  signIn: (signInConfig: signInFunctionParams) => boolean;
  notification: Notification;
  userClient: UserClient;
};

type ChangePasswordFormProps = {
  password: string;
  confirmPassword: string;
};

const ChangePassword = (props: ChangePasswordProps) => {
  const form = useForm<ChangePasswordFormProps>({
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

  const onSubmit = async (values: ChangePasswordFormProps) => {
    const response = await props.userClient.update({
      password: values.password,
    });
    if (response.statusCode === 200) {
      authenticate({
        tokens: response,
        signIn: props.signIn,
      });
      props.notification.success("Password updated");
    } else {
      props.notification.error("Please try again");
    }
  };

  return (
    <Tabs.Panel value="change-password">
      <UpdateForm
        passwordInputs={passwordInputs}
        onSubmit={onSubmit}
        key={"edit"}
        form={form}
      />
    </Tabs.Panel>
  );
};

export default ChangePassword;
