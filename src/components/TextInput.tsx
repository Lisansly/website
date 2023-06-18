import { TextInput as MantineTextInput } from "@mantine/core";

export type TextInputProps = {
  placeholder: string;
  validation?: any;
  label: string;
};

const TextInput = (props: TextInputProps) => {
  return (
    <MantineTextInput
      placeholder={props.placeholder}
      {...props.validation}
      label={props.label}
      variant="filled"
      radius={10}
      mb={"md"}
    />
  );
};

export default TextInput;
