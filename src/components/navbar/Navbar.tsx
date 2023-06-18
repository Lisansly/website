import {
  ActionIcon,
  Box,
  Burger,
  Group,
  Overlay,
  createStyles,
} from "@mantine/core";
import { useIsAuthenticated } from "react-auth-kit";
import UserMenu from "./UserMenu";
import { useState } from "react";
import Button from "./Button";
import Link from "./Link";
import Menu from "./Menu";
import Logo from "./Logo";
import { IconBrandGithub } from "@tabler/icons-react";
import SwitchTheme from "./SwitchTheme";

const buttons = [
  {
    variant: "subtle",
    path: "/signin",
    label: "Sign In",
  },
  {
    variant: "filled",
    label: "Sign Up",
    path: "/signup",
  },
];

const Navbar = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const isAuthenticated = useIsAuthenticated();
  const useStyles = createStyles((theme) => ({
    buttons: {
      gap: theme.spacing.md,
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
      position: "sticky",
      top: 0,
      padding: theme.spacing.xl,
      zIndex: 2,
      height: "max-content",
      [theme.fn.largerThan("md")]: {
        paddingInline: "16.7%",
      },
    },
    navbarItems: {
      width: "100%",
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
    burger: {
      marginLeft: 10,
      [theme.fn.largerThan("md")]: {
        display: "none",
      },
    },
    overlay: {
      backgroundColor: theme.colorScheme === "dark" ? "#00000080" : "#ffffff80",
    },
  }));

  const { classes } = useStyles();

  const links = [
    { path: "/", label: "Home" },
    { path: "/documentation", label: "Documentation" },
    { path: "/dashboard/cloud-based-licensing", label: "Dashboard" },
  ];

  return (
    <>
      <Group className={classes.navbar}>
        <Overlay blur={10} zIndex={-1} className={classes.overlay} />
        <Group className={classes.navbarItems}>
          <Logo />
          {links.map((link) => (
            <Link
              className={classes.link}
              label={link.label}
              path={link.path}
              key={link.path}
            />
          ))}
          {isAuthenticated() ? (
            <UserMenu />
          ) : (
            <Box className={classes.buttons} ml={"auto"}>
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
          <ActionIcon
            href="https://github.com/Lisansly"
            variant="subtle"
            target="_blank"
            component="a"
            radius="md"
            size="lg"
          >
            <IconBrandGithub />
          </ActionIcon>
          <SwitchTheme />
        </Group>
        <Burger
          size="sm"
          onClick={() => setOpened((o) => !o)}
          className={classes.burger}
          opened={opened}
        />
      </Group>
      <Menu
        opened={opened}
        setOpened={setOpened}
        isAuthenticated={isAuthenticated}
      />
    </>
  );
};

export default Navbar;
