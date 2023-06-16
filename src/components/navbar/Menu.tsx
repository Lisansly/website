import { createStyles } from "@mantine/core";
import { useSpring, animated } from "@react-spring/web";
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
      position: "absolute",
      height: "100vh",
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

  const [spring] = useSpring(
    () => ({
      x: props.opened ? 0 : 1000,
      config: { mass: 5, tension: 500, friction: 80 },
    }),
    [props.opened]
  );

  return (
    <div
      style={{
        position: "sticky",
        top: 61,
        zIndex: 2,
      }}
    >
      <animated.div style={spring}>
        <div className={classes.menu}>
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
        </div>
      </animated.div>
    </div>
  );
};

export default Menu;
