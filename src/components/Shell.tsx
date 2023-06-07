import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { AppShell } from "@mantine/core";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";

type ShellProps = {
  children: React.ReactNode;
};

const Shell: React.FC<ShellProps> = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  return (
    <AppShell
      sx={(theme) => ({
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.gray[0],
          paddingTop: 140,
          [theme.fn.smallerThan("sm")]: {
            paddingTop: 110,
          },
        },
      })}
      navbarOffsetBreakpoint="sm"
      navbar={<Navbar isAuthenticated={isAuthenticated} signOut={signOut} />}
      header={<Header />}
    >
      {children}
    </AppShell>
  );
};

export default Shell;
