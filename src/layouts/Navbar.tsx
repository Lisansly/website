import { Navbar as MantineNavbar } from "@mantine/core";
import Button from "../components/navbar/Button";
import {
  IconFileDescription,
  IconLayoutDashboard,
  IconLogin,
  IconUserPlus,
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
      p="md"
      hiddenBreakpoint="sm"
      hidden={!props.opened}
      width={{ sm: 200, lg: 300 }}
    >
      {navbarButtons.map((button) => (
        <Button
          icon={button.icon}
          label={button.label}
          path={button.link}
          setOpened={props.setOpened}
        />
      ))}
    </MantineNavbar>
  );
};

export default Navbar;
