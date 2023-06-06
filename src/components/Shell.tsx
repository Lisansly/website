import { AppShell, useMantineTheme } from "@mantine/core";
import { useIsAuthenticated } from "react-auth-kit";
import { useMediaQuery } from "@mantine/hooks";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";

type ShellProps = {
  children: React.ReactNode;
};

const Shell: React.FC<ShellProps> = ({ children }) => {
  const matches = useMediaQuery(`(max-width: 770px)`);
  const isAuthenticated = useIsAuthenticated();
  const theme = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.gray[0],
          paddingTop: 140,
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          isAuthenticated={isAuthenticated}
          matches={matches}
          theme={theme}
        />
      }
      header={
        <Header
          isAuthenticated={isAuthenticated}
          matches={matches}
          theme={theme}
        />
      }
    >
      {children}
    </AppShell>
  );
};

export default Shell;
