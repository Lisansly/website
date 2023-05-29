import { TextInput as TxtInput } from "@mantine/core";

type TextInputProps = {
  placeholder: string;
  required: boolean;
  label: string;
  mb: string;
};

const TextInput = (props: TextInputProps) => {
  return (
    <TxtInput
      placeholder={props.placeholder}
      required={props.required}
      label={props.label}
      mb={props.mb}
    />
  );
};

export default TextInput;
