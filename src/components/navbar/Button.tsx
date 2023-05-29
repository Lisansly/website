import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";

type ButtonProps = {
  icon: React.ReactNode;
  link: string;
  label: string;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const Button = (props: ButtonProps) => {
  return (
    <Link to={props.link}>
      <UnstyledButton
        onClick={() => props.setOpened && props.setOpened(false)}
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
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
