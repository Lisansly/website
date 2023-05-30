import { Button as MantineButton } from "@mantine/core";
import { Link } from "react-router-dom";

type ButtonProps = {
  variant: string;
  radius: string;
  label: string;
  color: string;
  path: string;
};

const Button = (props: ButtonProps) => {
  return (
    <Link to={props.path}>
      <MantineButton
        variant={props.variant}
        radius={props.radius}
        color={props.color}
      >
        {props.label}
      </MantineButton>
    </Link>
  );
};

export default Button;
