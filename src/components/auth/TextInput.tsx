import { TextInput as MantineTextInput } from "@mantine/core";

type TextInputProps = {
  placeholder: string;
  required: boolean;
  label: string;
  mb: string;
};

const TextInput = (props: TextInputProps) => {
  return (
    <MantineTextInput
      placeholder={props.placeholder}
      required={props.required}
      label={props.label}
      mb={props.mb}
    />
  );
};

export default TextInput;
