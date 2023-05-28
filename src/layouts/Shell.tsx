import {
  AppShell,
  Box,
  Button,
  Header,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

interface ShellProps {
  children: React.ReactNode;
}

interface HeaderLinkProps {
  link: string;
  text: string;
}
interface HeaderButtonProps {
  link: string;
  text: string;
  color: string;
  radius: string;
  variant: string;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
  const theme = useMantineTheme();
  const useStyles = createStyles((theme) => ({
    link: {
      textDecoration: "none",
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      marginLeft: theme.spacing.md,
      fontSize: theme.fontSizes.md,
      fontWeight: 600,
      transition: "color 200ms ease",
      "&:hover": {
        color:
          theme.colorScheme === "dark" ? theme.colors.blue[4] : theme.black,
      },
    },
    buttons: {
      marginLeft: "auto",
      marginRight: theme.spacing.xl,
      display: "flex",
      alignItems: "center",
    },
  }));
  const { classes } = useStyles();

  const HeaderLink = (link: HeaderLinkProps) => {
    return (
      <Link to={link.link} className={classes.link}>
        <Text>{link.text}</Text>
      </Link>
    );
  };

  const headerLinks: HeaderLinkProps[] = [
    { link: "/documentation", text: "Documentation" },
    { link: "/dashboard", text: "Dashboard" },
  ];

  const HeaderButton = (button: HeaderButtonProps) => {
    return (
      <Link to={button.link} className={classes.link}>
        <Button
          color={button.color}
          radius={button.radius}
          variant={button.variant}
        >
          {button.text}
        </Button>
      </Link>
    );
  };
  const headerButtons: HeaderButtonProps[] = [
    {
      link: "/login",
      text: "Login",
      color: "blue",
      radius: "xl",
      variant: "default",
    },
    {
      link: "/signup",
      text: "Sign Up",
      color: "blue",
      radius: "xl",
      variant: "filled",
    },
  ];
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Logo />
            {headerLinks.map((link) => (
              <HeaderLink link={link.link} text={link.text} />
            ))}
            <Box className={classes.buttons}>
              {headerButtons.map((button) => (
                <HeaderButton
                  link={button.link}
                  text={button.text}
                  color={button.color}
                  radius={button.radius}
                  variant={button.variant}
                />
              ))}
            </Box>
            <SwitchTheme />
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Shell;
