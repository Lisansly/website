import { AppShell, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

type ShellProps = {
  children: React.ReactNode;
};

const Shell: React.FC<ShellProps> = ({ children }) => {
  const matches = useMediaQuery(`(max-width: 700px)`);
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

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
        />
      }
    >
      {children}
    </AppShell>
  );
};

export default Shell;
