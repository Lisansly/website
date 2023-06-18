import { PasswordInput as MantinePasswordInput } from "@mantine/core";

export type PasswordInputProps = {
  placeholder: string;
  validation?: any;
  label: string;
};

const PasswordInput = (props: PasswordInputProps) => {
  return (
    <MantinePasswordInput
      placeholder={props.placeholder}
      {...props.validation}
      label={props.label}
      variant="filled"
      radius={10}
      mb={"md"}
    />
  );
};

export default PasswordInput;
