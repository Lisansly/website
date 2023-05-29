import { Button as Btn } from "@mantine/core";
import { Link } from "react-router-dom";

type ButtonProps = {
  variant: string;
  radius: string;
  label: string;
  color: string;
  path: string;
  mr: string;
};

const Button = (props: ButtonProps) => {
  return (
    <Link to={props.path}>
      <Btn
        color={props.color}
        radius={props.radius}
        variant={props.variant}
        mr={props.mr}
      >
        {props.label}
      </Btn>
    </Link>
  );
};

export default Button;
