import {
  AppShell,
  Box,
  Burger,
  Button,
  Header,
  Navbar,
  createStyles,
  useMantineTheme,
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
} from "@mantine/core";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconFileDescription,
  IconLayoutDashboard,
  IconLogin,
  IconUserPlus,
} from "@tabler/icons-react";

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

interface NavbarLinkProps {
  icon: React.ReactNode;
  label: string;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: 630px)`);
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
  const NavbarLink = (link: NavbarLinkProps) => {
    return (
      <>
        <UnstyledButton
          sx={(theme) => ({
            display: "block",
            width: "100%",
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Group>
            <ThemeIcon variant="default">{link.icon}</ThemeIcon>
            <Text size="sm">{link.label}</Text>
          </Group>
        </UnstyledButton>
      </>
    );
  };
  const navbarLinks = [
    {
      icon: <IconFileDescription size="1.1rem" />,
      label: "Documentation",
    },
    {
      icon: <IconLayoutDashboard size="1.1rem" />,
      label: "Dashboard",
    },
    {
      icon: <IconLogin size="1.1rem" />,
      label: "Login",
    },
    {
      icon: <IconUserPlus size="1.1rem" />,
      label: "Register",
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
      navbarOffsetBreakpoint="sm"
      navbar={
        matches ? (
          <>
            <Navbar
              p="md"
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 200, lg: 300 }}
            >
              {navbarLinks.map((link) => (
                <NavbarLink icon={link.icon} label={link.label} />
              ))}
            </Navbar>
          </>
        ) : (
          <></>
        )
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Logo />
            {!matches && (
              <>
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
              </>
            )}
            <SwitchTheme />
            {matches && (
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="sm"
              />
            )}
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Shell;
