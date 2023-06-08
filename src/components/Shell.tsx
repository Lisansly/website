import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { AppShell, ScrollArea } from "@mantine/core";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";

type ShellProps = {
  children: React.ReactNode;
};

const Shell: React.FC<ShellProps> = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  return (
    <ScrollArea
      styles={{
        scrollbar: {
          zIndex: 100,
        },
      }}
    >
      <AppShell
        sx={(theme) => ({
          main: {
            height: "100vh",
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
    </ScrollArea>
  );
};

export default Shell;
