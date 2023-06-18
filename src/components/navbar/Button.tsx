import { Button as MantineButton } from "@mantine/core";
import { Link } from "react-router-dom";

type ButtonProps = {
  variant: string;
  label: string;
  path: string;
};

const Button = (props: ButtonProps) => {
  return (
    <Link to={props.path}>
      <MantineButton variant={props.variant} radius="md" size="xs">
        {props.label}
      </MantineButton>
    </Link>
  );
};

export default Button;
