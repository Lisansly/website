import { AppShell, Header, useMantineTheme } from "@mantine/core";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";

interface ShellProps {
  children: React.ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
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
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Logo />
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
