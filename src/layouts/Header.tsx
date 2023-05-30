import { Box, Burger, Header as Hdr, MantineTheme } from "@mantine/core";
import SwitchTheme from "../components/header/SwitchTheme";
import Button from "../components/header/Button";
import Logo from "../components/header/Logo";
import Link from "../components/header/Link";

const headerLinks = [
  { link: "/documentation", label: "Documentation" },
  { link: "/dashboard", label: "Dashboard" },
];

const headerButtons = [
  {
    path: "/login",
    label: "Login",
    color: "blue",
    radius: "xl",
    variant: "default",
    mr: "md",
  },
  {
    path: "/signup",
    label: "Sign Up",
    color: "blue",
    radius: "xl",
    variant: "filled",
    mr: "",
  },
];

type HeaderProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  theme: MantineTheme;
  opened: boolean;
  matches: boolean;
  classes: any;
};

const Header = (props: HeaderProps) => {
  return (
    <Hdr height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Logo setOpened={props.setOpened} matches={props.matches} />
        {!props.matches && (
          <>
            {headerLinks.map((link) => (
              <Link path={link.link} label={link.label} />
            ))}
            <Box className={props.classes.buttons}>
              {headerButtons.map((button) => (
                <Button
                  path={button.path}
                  label={button.label}
                  color={button.color}
                  radius={button.radius}
                  variant={button.variant}
                  mr={button.mr}
                />
              ))}
            </Box>
          </>
        )}
        <SwitchTheme matches={props.matches} />
        {props.matches && (
          <Burger
            opened={props.opened}
            onClick={() => props.setOpened((o) => !o)}
            size="sm"
            color={props.theme.colors.gray[6]}
            mr="sm"
          />
        )}
      </div>
    </Hdr>
  );
};

export default Header;
