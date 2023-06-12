import {
  Box,
  Burger,
  Group,
  Header,
  Transition,
  createStyles,
} from "@mantine/core";
import MenuButton from "./MenuButton";
import UserMenu from "./UserMenu";
import { useState } from "react";
import Button from "./Button";
import Link from "./Link";
import {
  IconFileDescription,
  IconLayoutDashboard,
  IconUserPlus,
  IconLogout,
  IconLogin,
  IconHome,
  IconUser,
} from "@tabler/icons-react";

type NavbarProps = {
  isAuthenticated: () => boolean;
  signOut: () => boolean;
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
    navbarGroup: {
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
    menu: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[1],
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
      position: "fixed",
      width: "100%",
      padding: 15,
      zIndex: 1,
      top: 105,
    },
  }));

  const { classes } = useStyles();

  const links = [
    { path: "/", label: "Home" },
    { path: "/documentation", label: "Documentation" },
    { path: "/dashboard/cloud-based-licensing", label: "Dashboard" },
  ];

  type MenuButtonProps = {
    icon: React.ReactNode;
    onClick?: () => void;
    show: boolean;
    label: string;
    link: string;
  };

  const menuButtons: MenuButtonProps[] = [
    {
      icon: <IconHome size="1.1rem" />,
      link: "/",
      label: "Home",
      show: true,
    },
    {
      icon: <IconFileDescription size="1.1rem" />,
      link: "/documentation",
      label: "Documentation",
      show: true,
    },
    {
      icon: <IconLayoutDashboard size="1.1rem" />,
      link: "/dashboard",
      label: "Dashboard",
      show: true,
    },
    {
      icon: <IconLogin size="1.1rem" />,
      link: "/signin",
      label: "Sign In",
      show: !props.isAuthenticated(),
    },
    {
      icon: <IconUserPlus size="1.1rem" />,
      link: "/signup",
      label: "Sign Up",
      show: !props.isAuthenticated(),
    },
    {
      icon: <IconUser size="1.1rem" />,
      link: "/profile/edit",
      label: "Profile",
      show: props.isAuthenticated(),
    },
    {
      icon: <IconLogout size="1.1rem" />,
      link: "/",
      label: "Sign Out",
      show: props.isAuthenticated(),
      onClick: () => props.signOut(),
    },
  ];
  return (
    <>
      <Header hidden={false} height={"max-content"} className={classes.navbar}>
        <Group className={classes.navbarGroup}>
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
            {props.isAuthenticated() && <UserMenu />}
          </Group>
        </Group>
        <Burger
          onClick={() => setOpened((o) => !o)}
          className={classes.burger}
          opened={opened}
        />
      </Header>
      <Transition mounted={opened} transition="slide-down" duration={750}>
        {(styles) => (
          <Box className={classes.menu} style={styles}>
            {menuButtons.map((button, index) => (
              <div key={index}>
                {button.show && (
                  <MenuButton
                    onClick={button.onClick}
                    setOpened={setOpened}
                    label={button.label}
                    icon={button.icon}
                    path={button.link}
                  />
                )}
              </div>
            ))}
          </Box>
        )}
      </Transition>
    </>
  );
};

export default Navbar;
