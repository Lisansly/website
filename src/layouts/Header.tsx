import SwitchTheme from "../components/header/SwitchTheme";
import Button from "../components/header/Button";
import Logo from "../components/header/Logo";
import Link from "../components/header/Link";
import {
  Header as MantineHeader,
  MantineTheme,
  Burger,
  Box,
  createStyles,
} from "@mantine/core";

type HeaderProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  theme: MantineTheme;
  opened: boolean;
  matches: boolean;
};

const useStyles = createStyles((theme) => ({
  buttons: {
    marginLeft: "auto",
    marginRight: theme.spacing.xl,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.md,
  },
  links: {
    marginLeft: "30px",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.md,
  },
}));

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

const Header = (props: HeaderProps) => {
  const { classes } = useStyles();

  return (
    <MantineHeader height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Logo
          setOpened={props.setOpened}
          matches={props.matches}
          logo="/lisansly.png"
          label="Lisansly"
          marginLeft="md"
          smallSize={30}
          largeSize={35}
          path="/"
        />
        {!props.matches && (
          <>
            <Box className={classes.links}>
              {headerLinks.map((link) => (
                <Link path={link.link} label={link.label} />
              ))}
            </Box>
            <Box className={classes.buttons}>
              {headerButtons.map((button) => (
                <Button
                  path={button.path}
                  label={button.label}
                  color={button.color}
                  radius={button.radius}
                  variant={button.variant}
                />
              ))}
            </Box>
          </>
        )}
        <SwitchTheme
          matches={props.matches}
          title="Switch theme"
          variant="default"
          radius="md"
          size="lg"
          mr="lg"
        />
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
    </MantineHeader>
  );
};

export default Header;
