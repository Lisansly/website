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

type UserButtonProps = {
  image: string;
  name: string;
};

const useStyles = createStyles((theme) => ({
  menuTarget: {
    padding: 6,
    [theme.fn.smallerThan("md")]: {
      padding: 4,
    },
    borderRadius: theme.radius.md,
    "&:hover": {
      cursor: "pointer",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[0],
    },
  },
  menuDropdown: {
    padding: 5,
  },
}));

export default function UserMenu(props: UserButtonProps) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const signOut = useSignOut();
  return (
    <Group position="center">
      <Menu withArrow opened={opened} onChange={setOpened}>
        <Menu.Target>
          <Group className={classes.menuTarget}>
            <Avatar size="md" />
            {opened ? (
              <IconChevronDown size={"1rem"} />
            ) : (
              <IconChevronRight size={"1rem"} />
            )}
          </Group>
        </Menu.Target>
        <Menu.Dropdown className={classes.menuDropdown}>
          <Menu.Label mb={"xs"}>{props.name}</Menu.Label>
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
