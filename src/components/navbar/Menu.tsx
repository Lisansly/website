import { Box, Transition, createStyles } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { useSignOut } from "react-auth-kit";
import MenuButton from "./MenuButton";
import React from "react";
import {
  IconFileDescription,
  IconLayoutDashboard,
  IconUserPlus,
  IconLogout,
  IconLogin,
  IconHome,
  IconUser,
} from "@tabler/icons-react";

type MenuButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  show: boolean;
  label: string;
  link: string;
};

type MenuProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: () => boolean;
};

const Menu = (props: MenuProps) => {
  const signOut = useSignOut();
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
      onClick: () => signOut(),
    },
  ];

  const useStyles = createStyles((theme) => ({
    menu: {
      position: "sticky",
      top: 61,
      zIndex: 2,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[1],
      [theme.fn.largerThan("md")]: {
        display: "none",
      },
      width: "100%",
      padding: 15,
    },
  }));
  const { classes } = useStyles();
  const ref = useClickOutside(() => props.setOpened(false));

  return (
    <Transition mounted={props.opened} transition="slide-down" duration={333}>
      {(styles) => (
        <Box ref={ref} className={classes.menu} style={styles}>
          {menuButtons.map((button, index) => (
            <div key={index}>
              {button.show && (
                <MenuButton
                  setOpened={props.setOpened}
                  onClick={button.onClick}
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
  );
};

export default Menu;
