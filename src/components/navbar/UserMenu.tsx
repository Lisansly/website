import { Group, Menu, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import Avatar from "../Avatar";
import {
  IconChevronRight,
  IconChevronDown,
  IconUserCircle,
  IconLogout,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  menuTarget: {
    borderRadius: theme.radius.md,
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuDropdown: {
    padding: 5,
  },
  name: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[0],
    textAlign: "center",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

type UserMenuProps = {
  name: string;
  signOut: () => boolean;
};

export default function UserMenu(props: UserMenuProps) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  return (
    <Group position="center">
      <Menu withArrow opened={opened} onChange={setOpened}>
        <Menu.Target>
          <Group className={classes.menuTarget}>
            <Avatar size="md" name={props.name} />
            {opened ? (
              <IconChevronDown size="1rem" />
            ) : (
              <IconChevronRight size="1rem" />
            )}
          </Group>
        </Menu.Target>
        <Menu.Dropdown className={classes.menuDropdown}>
          <Menu.Label className={classes.name}>{props.name}</Menu.Label>
          <Link to="/profile/edit">
            <Menu.Item icon={<IconUserCircle size={14} />}>Profile</Menu.Item>
          </Link>
          <Link to="/">
            <Menu.Item
              icon={<IconLogout size={14} />}
              onClick={props.signOut}
              color="red"
            >
              Sign Out
            </Menu.Item>
          </Link>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
