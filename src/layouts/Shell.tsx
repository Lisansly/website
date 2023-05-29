import { AppShell, createStyles, useMantineTheme } from "@mantine/core";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

type ShellProps = {
  children: React.ReactNode;
};

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginLeft: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
    transition: "color 200ms ease",
    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.colors.blue[4] : theme.black,
    },
  },
  buttons: {
    marginLeft: "auto",
    marginRight: theme.spacing.xl,
    display: "flex",
    alignItems: "center",
  },
}));

const Shell: React.FC<ShellProps> = ({ children }) => {
  const matches = useMediaQuery(`(max-width: 630px)`);
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { classes } = useStyles();

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
        matches ? <Navbar setOpened={setOpened} opened={opened} /> : <></>
      }
      header={
        <Header
          setOpened={setOpened}
          opened={opened}
          matches={matches}
          theme={theme}
          classes={classes}
        />
      }
    >
      {children}
    </AppShell>
  );
};

export default Shell;
