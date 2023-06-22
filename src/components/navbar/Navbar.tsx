import { Box, Burger, Group, Overlay, createStyles } from "@mantine/core";
import { useIsAuthenticated } from "react-auth-kit";
import SwitchTheme from "./SwitchTheme";
import UserMenu from "./UserMenu";
import { useState } from "react";
import Button from "./Button";
import Github from "./Github";
import Link from "./Link";
import Menu from "./Menu";
import Logo from "./Logo";

type ButtonProps = {
  variant: "subtle" | "filled";
  path: string;
  label: string;
};

const buttons: ButtonProps[] = [
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

type LinkProps = {
  label: string;
  path: string;
};

const links: LinkProps[] = [
  { path: "/", label: "Home" },
  { path: "/documentation", label: "Documentation" },
  { path: "/dashboard/cloud-based-licensing", label: "Dashboard" },
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
      zIndex: 3,
      height: "max-content",
      [theme.fn.largerThan("md")]: {
        paddingInline: "16.7%",
      },
    },
    navbarItems: {
      width: "100%",
    },
    middleItems: {
      width: "calc(100% - 100px)",
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
    overlay: {
      backgroundColor: theme.colorScheme === "dark" ? "#00000080" : "#ffffff80",
    },
    burger: {
      [theme.fn.largerThan("md")]: {
        display: "none",
      },
    },
  }));

  const { classes } = useStyles();

  return (
    <>
      <Group className={classes.navbar}>
        <Overlay blur={10} zIndex={-1} className={classes.overlay} />
        <Group className={classes.navbarItems}>
          <Burger
            onClick={() => setOpened((o) => !o)}
            className={classes.burger}
            opened={opened}
            size="sm"
          />
          <Group className={classes.middleItems}>
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
          </Group>
          <Github />
          <SwitchTheme />
        </Group>
      </Group>
      <Menu
        isAuthenticated={isAuthenticated}
        setOpened={setOpened}
        opened={opened}
      />
    </>
  );
};

export default Navbar;
