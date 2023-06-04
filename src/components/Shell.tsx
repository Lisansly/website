import { AppShell, useMantineTheme } from "@mantine/core";
import { useIsAuthenticated } from "react-auth-kit";
import { useMediaQuery } from "@mantine/hooks";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import { useState } from "react";

type ShellProps = {
  children: React.ReactNode;
};

const Shell: React.FC<ShellProps> = ({ children }) => {
  const matches = useMediaQuery(`(max-width: 770px)`);
  const isAuthenticated = useIsAuthenticated();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[1],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        matches ? <Navbar setOpened={setOpened} opened={opened} /> : <></>
      }
      header={
        <Header
          isAuthenticated={isAuthenticated}
          setOpened={setOpened}
          matches={matches}
          opened={opened}
          theme={theme}
        />
      }
    >
      {children}
    </AppShell>
  );
};

export default Shell;
