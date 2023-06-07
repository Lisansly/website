import { Button as MantineButton } from "@mantine/core";

type ButtonProps = {
  loading?: boolean;
  label: string;
};

const Button = (props: ButtonProps) => {
  return (
    <MantineButton
      loading={props.loading}
      type="submit"
      radius="sm"
      fullWidth
      mt="xl"
    >
      {props.label}
    </MantineButton>
  );
};

export default Button;
