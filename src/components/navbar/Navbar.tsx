import { Box, Burger, Group, createStyles } from "@mantine/core";
import { useIsAuthenticated } from "react-auth-kit";
import UserMenu from "./UserMenu";
import { useState } from "react";
import Button from "./Button";
import Link from "./Link";
import Menu from "./Menu";

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

const Navbar = () => {
  const [opened, setOpened] = useState(false);
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
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[3],
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
    navbarItems: {
      width: "100%",
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },
    burger: {
      display: "none",
      margin: 5,
      marginRight: theme.spacing.lg,
      marginLeft: "auto",
      [theme.fn.smallerThan("sm")]: {
        display: "block",
      },
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
        <Group className={classes.navbarItems}>
          {links.map((link) => (
            <Link
              className={classes.link}
              label={link.label}
              path={link.path}
              key={link.path}
            />
          ))}
          {!isAuthenticated() ? (
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
          ) : (
            <UserMenu />
          )}
        </Group>
        <Burger
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
