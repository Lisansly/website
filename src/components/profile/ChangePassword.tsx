import { PasswordInputProps } from "../PasswordInput";
import { hasLength, useForm } from "@mantine/form";
import UpdateForm from "./UpdateForm";
import { Tabs } from "@mantine/core";

type ChangePasswordProps = {
  password: string;
  confirmPassword: string;
};

const ChangePassword = () => {
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
