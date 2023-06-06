import { Box, Burger, Group, Header, createStyles } from "@mantine/core";
import Link from "./Link";
import Button from "./Button";
import UserMenu from "./UserMenu";
import { useState } from "react";
import {
  IconFileDescription,
  IconLayoutDashboard,
  IconUserPlus,
  IconLogin,
  IconHome,
} from "@tabler/icons-react";

import MenuButton from "./MenuButton";
import { useAuthUser } from "react-auth-kit";

type NavbarProps = {
  isAuthenticated: () => boolean;
};

const buttons = [
  {
    variant: "default",
    path: "/signin",
    label: "Sign In",
  },
  {
    variant: "filled",
    label: "Sign Up",
    path: "/signup",
  },
];

const links = [
  { path: "/", label: "Home" },
  { path: "/documentation", label: "Documentation" },
  { path: "/dashboard/cloud-based-licensing", label: "Dashboard" },
];

const menuButtons = [
  {
    icon: <IconHome size="1.1rem" />,
    link: "/",
    label: "Home",
  },
  {
    icon: <IconFileDescription size="1.1rem" />,
    link: "/documentation",
    label: "Documentation",
  },
  {
    icon: <IconLayoutDashboard size="1.1rem" />,
    link: "/dashboard",
    label: "Dashboard",
  },
  {
    icon: <IconLogin size="1.1rem" />,
    link: "/signin",
    label: "Sign In",
  },
  {
    icon: <IconUserPlus size="1.1rem" />,
    link: "/signup",
    label: "Sign Up",
  },
];

const Navbar = (props: NavbarProps) => {
  const [opened, setOpened] = useState(false);
  const useStyles = createStyles((theme) => ({
    buttons: {
      gap: theme.spacing.md,
      alignItems: "center",
      display: "flex",
    },
    links: {
      gap: theme.spacing.xl,
      alignItems: "center",
      display: "flex",
    },
    link: {
      transition: "200ms ease",
      ":hover": {
        color:
          theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 4 : 6
          ],
      },
    },
    navbar: {
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[3],
      zIndex: 10,
      top: 60,
      [theme.fn.largerThan("sm")]: {
        padding: theme.spacing.md,
        paddingRight: 75,
        paddingLeft: 75,
      },
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[1],
    },
    burger: {
      display: "none",
      paddingTop: 8,
      paddingLeft: theme.spacing.xl,
      [theme.fn.smallerThan("sm")]: {
        display: "block",
      },
    },
    menu: {
      padding: 13,
      display: "none",
      paddingTop: 5,
      [theme.fn.smallerThan("sm")]: {
        display: opened ? "block" : "none",
      },
    },
  }));
  const { classes } = useStyles();
  const userData = useAuthUser();
  return (
    <Header
      hidden={false}
      height={{ base: opened ? 275 : 40, sm: 70 }}
      className={classes.navbar}
    >
      <Group
        sx={(theme) => ({
          [theme.fn.smallerThan("sm")]: {
            display: "none",
          },
        })}
      >
        <Group>
          <Box className={classes.links}>
            {links.map((link) => (
              <Link
                className={classes.link}
                label={link.label}
                path={link.path}
                key={link.path}
              />
            ))}
          </Box>
        </Group>
        <Group ml={"auto"}>
          {!props.isAuthenticated() && (
            <Box className={classes.buttons}>
              {buttons.map((button) => (
                <Button
                  variant={button.variant}
                  label={button.label}
                  path={button.path}
                  key={button.path}
                />
              ))}
            </Box>
          )}
          {props.isAuthenticated() && <UserMenu username={userData()?.name} />}
        </Group>
      </Group>
      <Burger
        className={classes.burger}
        onClick={() => setOpened((o) => !o)}
        opened={opened}
      />
      <div className={classes.menu}>
        {menuButtons.map((button) => (
          <MenuButton
            setOpened={setOpened}
            label={button.label}
            key={button.label}
            icon={button.icon}
            path={button.link}
          />
        ))}
      </div>
    </Header>
  );
};

export default Navbar;
