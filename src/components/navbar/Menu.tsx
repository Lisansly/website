import { Overlay, createStyles } from "@mantine/core";
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
  path: string;
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
      path: "/",
      label: "Home",
      show: true,
    },
    {
      icon: <IconFileDescription size="1.1rem" />,
      path: "/documentation",
      label: "Documentation",
      show: true,
    },
    {
      icon: <IconLayoutDashboard size="1.1rem" />,
      path: "/dashboard",
      label: "Dashboard",
      show: true,
    },
    {
      icon: <IconLogin size="1.1rem" />,
      path: "/signin",
      label: "Sign In",
      show: !props.isAuthenticated(),
    },
    {
      icon: <IconUserPlus size="1.1rem" />,
      path: "/signup",
      label: "Sign Up",
      show: !props.isAuthenticated(),
    },
    {
      icon: <IconUser size="1.1rem" />,
      path: "/profile/details",
      label: "Profile",
      show: props.isAuthenticated(),
    },
    {
      icon: <IconLogout size="1.1rem" />,
      path: "/",
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
      [theme.fn.largerThan("md")]: {
        display: "none",
      },
      width: "100%",
      padding: 15,
    },
    overlay: {
      backgroundColor: theme.colorScheme === "dark" ? "#00000080" : "#ffffff80",
    },
  }));
  const { classes } = useStyles();

  const [spring] = useSpring(
    () => ({
      x: props.opened ? 0 : -1000,
    }),
    [props.opened]
  );

  return (
    <div
      style={{
        position: "sticky",
        top: 60,
        zIndex: 3,
      }}
    >
      <animated.div className={classes.menu} style={spring}>
        <Overlay blur={10} zIndex={-1} className={classes.overlay} />

        {menuButtons.map((button, index) => (
          <div key={index}>
            {button.show && (
              <MenuButton
                setOpened={props.setOpened}
                onClick={button.onClick}
                label={button.label}
                icon={button.icon}
                path={button.path}
              />
            )}
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default Menu;
