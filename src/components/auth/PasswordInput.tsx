import { PasswordInput as MantinePasswordInput } from "@mantine/core";

type PasswordInputProps = {
  placeholder: string;
  required: boolean;
  label: string;
  mb: string;
};

const PasswordInput = (props: PasswordInputProps) => {
  return (
    <MantinePasswordInput
      placeholder={props.placeholder}
      required={props.required}
      label={props.label}
      mb={props.mb}
    />
  );
};

export default PasswordInput;
