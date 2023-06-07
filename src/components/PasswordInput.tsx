import { PasswordInput as MantinePasswordInput } from "@mantine/core";

export type PasswordInputProps = {
  placeholder: string;
  validation?: any;
  label: string;
  key: string;
};

const PasswordInput = (props: PasswordInputProps) => {
  return (
    <MantinePasswordInput
      placeholder={props.placeholder}
      {...props.validation}
      label={props.label}
      key={props.key}
      mb="md"
    />
  );
};

export default PasswordInput;
