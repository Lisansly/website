import { Navbar as MantineNavbar } from "@mantine/core";
import Button from "./Button";
import {
  IconFileDescription,
  IconLayoutDashboard,
  IconUserPlus,
  IconLogin,
} from "@tabler/icons-react";

type NavbarProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  opened: boolean;
};

const navbarButtons = [
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
    link: "/login",
    label: "Login",
  },
  {
    icon: <IconUserPlus size="1.1rem" />,
    link: "/signup",
    label: "Sign Up",
  },
];

const Navbar = (props: NavbarProps) => {
  return (
    <MantineNavbar
      width={{ sm: 200, lg: 300 }}
      hidden={!props.opened}
      hiddenBreakpoint="sm"
      zIndex={10}
      p="md"
    >
      {navbarButtons.map((button) => (
        <Button
          setOpened={props.setOpened}
          label={button.label}
          key={button.label}
          icon={button.icon}
          path={button.link}
        />
      ))}
    </MantineNavbar>
  );
};

export default Navbar;
