import { PasswordInput as MantinePasswordInput } from "@mantine/core";

type PasswordInputProps = {
  placeholder: string;
  validation: any;
  label: string;
};

const PasswordInput = (props: PasswordInputProps) => {
  return (
    <MantinePasswordInput
      placeholder={props.placeholder}
      {...props.validation}
      label={props.label}
      mb="md"
    />
  );
};

export default PasswordInput;
