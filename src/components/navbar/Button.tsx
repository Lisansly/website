import { Link } from "react-router-dom";
import React from "react";
import {
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
  createStyles,
} from "@mantine/core";

type ButtonProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  icon: React.ReactNode;
  label: string;
  path: string;
};

const useStyles = createStyles((theme) => ({
  button: {
    display: "block",
    width: "100%",
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

const Button = (props: ButtonProps) => {
  const { classes } = useStyles();

  return (
    <Link to={props.path}>
      <UnstyledButton
        onClick={() => props.setOpened && props.setOpened(false)}
        className={classes.button}
      >
        <Group>
          <ThemeIcon variant="default">{props.icon}</ThemeIcon>
          <Text size="sm">{props.label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
};

export default Button;