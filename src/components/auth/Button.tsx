import { Button as MantineButton } from "@mantine/core";

type ButtonProps = {
  fullWidth: boolean;
  radius: string;
  label: string;
  mt: string;
};

const Button = (props: ButtonProps) => {
  return (
    <MantineButton
      fullWidth={props.fullWidth}
      radius={props.radius}
      mt={props.mt}
    >
      {props.label}
    </MantineButton>
  );
};

export default Button;
