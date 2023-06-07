import { TextInput as MantineTextInput } from "@mantine/core";

type TextInputProps = {
  placeholder: string;
  validation: any;
  label: string;
};

const TextInput = (props: TextInputProps) => {
  return (
    <MantineTextInput
      placeholder={props.placeholder}
      {...props.validation}
      label={props.label}
      mb="md"
    />
  );
};

export default TextInput;
