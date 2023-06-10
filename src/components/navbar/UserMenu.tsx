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
import { useAuthUser, useSignOut } from "react-auth-kit";

const useStyles = createStyles((theme) => ({
  menuTarget: {
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

export default function UserMenu() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const userData = useAuthUser();
  const signOut = useSignOut();
  return (
    <Group position="center">
      <Menu withArrow opened={opened} onChange={setOpened}>
        <Menu.Target>
          <Group className={classes.menuTarget}>
            <Avatar size="md" name={userData()?.name} />
            {opened ? (
              <IconChevronDown size="1rem" />
            ) : (
              <IconChevronRight size="1rem" />
            )}
          </Group>
        </Menu.Target>
        <Menu.Dropdown className={classes.menuDropdown}>
          <Menu.Label className={classes.name}>{userData()?.name}</Menu.Label>
          <Link to="/profile/edit">
            <Menu.Item icon={<IconUserCircle size={14} />}>Profile</Menu.Item>
          </Link>
          <Link to="/">
            <Menu.Item
              icon={<IconLogout size={14} />}
              onClick={signOut}
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
