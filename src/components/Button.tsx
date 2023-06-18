import { Button as MantineButton } from "@mantine/core";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  mt?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <MantineButton
      loading={props.loading}
      onClick={props.onClick}
      type="submit"
      radius={10}
      mt={props.mt}
      fullWidth={props.fullWidth}
    >
      {props.children}
    </MantineButton>
  );
};

export default Button;
