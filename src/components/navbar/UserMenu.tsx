import { Group, Menu, createStyles } from "@mantine/core";
import {
  IconChevronDown,
  IconUserCircle,
  IconLogout,
  IconChevronRight,
} from "@tabler/icons-react";
import Avatar from "../Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignOut } from "react-auth-kit";

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
  username: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[0],
    textAlign: "center",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

type UserMenuProps = {
  username: string;
};

export default function UserMenu(props: UserMenuProps) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const signOut = useSignOut();
  return (
    <Group position="center">
      <Menu withArrow opened={opened} onChange={setOpened}>
        <Menu.Target>
          <Group className={classes.menuTarget}>
            <Avatar size="md" username={props.username} />
            {opened ? (
              <IconChevronDown size={"1rem"} />
            ) : (
              <IconChevronRight size={"1rem"} />
            )}
          </Group>
        </Menu.Target>
        <Menu.Dropdown className={classes.menuDropdown}>
          <Menu.Label className={classes.username}>{props.username}</Menu.Label>
          <Link to="/profile">
            <Menu.Item icon={<IconUserCircle size={14} />}>Profile</Menu.Item>
          </Link>
          <Link to="/">
            <Menu.Item
              color="red"
              icon={<IconLogout size={14} />}
              onClick={signOut}
            >
              Sign Out
            </Menu.Item>
          </Link>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
