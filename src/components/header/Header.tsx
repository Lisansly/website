import SwitchTheme from "./SwitchTheme";
import UserMenu from "./UserMenu";
import Button from "./Button";
import Logo from "./Logo";
import Link from "../Link";
import {
  Header as MantineHeader,
  createStyles,
  MantineTheme,
  Burger,
  Group,
  Box,
  Text,
} from "@mantine/core";

type HeaderProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: () => boolean;
  theme: MantineTheme;
  matches: boolean;
  opened: boolean;
};

const useStyles = createStyles((theme) => ({
  buttons: {
    gap: theme.spacing.md,
    alignItems: "center",
    display: "flex",
  },
  links: {
    gap: theme.spacing.md,
    alignItems: "center",
    display: "flex",
  },
  link: {
    transition: "200ms ease",
    ":hover": {
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    },
  },
  header: {
    display: "flex",
    flexWrap: "nowrap",
    height: "100%",
    paddingRight: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[2],
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[4],
  },
}));

const headerLinks = [
  { path: "/documentation", label: "Documentation" },
  { path: "/dashboard/cloud-based-licensing", label: "Dashboard" },
];

const headerButtons = [
  {
    variant: "default",
    path: "/login",
    label: "Login",
  },
  {
    variant: "filled",
    label: "Sign Up",
    path: "/signup",
  },
];

const Header = (props: HeaderProps) => {
  const { classes } = useStyles();

  return (
    <MantineHeader height={{ base: 70, md: 85 }} className={classes.header}>
      <Group>
        <Logo setOpened={props.setOpened} matches={props.matches} />
        {!props.matches && (
          <Box className={classes.links}>
            {headerLinks.map((link) => (
              <Link path={link.path} key={link.path}>
                <Text fw={700} className={classes.link}>
                  {link.label}
                </Text>
              </Link>
            ))}
          </Box>
        )}
      </Group>
      <Group ml={"auto"}>
        {!props.isAuthenticated() && !props.matches && (
          <Box className={classes.buttons}>
            {headerButtons.map((button) => (
              <Button
                variant={button.variant}
                label={button.label}
                path={button.path}
                key={button.path}
              />
            ))}
          </Box>
        )}
        {props.isAuthenticated() && (
          <UserMenu image="as" name="yusufalitangoz" />
        )}
        <SwitchTheme ml={props.matches ? "0" : "md"} />
        {props.matches && (
          <Burger
            onClick={() => props.setOpened((o) => !o)}
            color={props.theme.colors.gray[6]}
            opened={props.opened}
            size="sm"
          />
        )}
      </Group>
    </MantineHeader>
  );
};

export default Header;
