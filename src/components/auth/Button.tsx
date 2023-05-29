import { Button as Btn } from "@mantine/core";

type ButtonProps = {
  fullWidth: boolean;
  radius: string;
  label: string;
  mt: string;
};

const Button = (props: ButtonProps) => {
  return (
    <Btn fullWidth={props.fullWidth} radius={props.radius} mt={props.mt}>
      {props.label}
    </Btn>
  );
};

export default Button;
