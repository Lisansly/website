import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { AppShell, ScrollArea } from "@mantine/core";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
type ShellProps = {
  children: React.ReactNode;
};

const Shell: React.FC<ShellProps> = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const viewport = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const signOut = useSignOut();

  useEffect(() => {
    viewport.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ScrollArea
      viewportRef={viewport}
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
            padding: 0,
            paddingTop: 140,
            [theme.fn.smallerThan("sm")]: {
              paddingTop: 105,
            },
          },
        })}
        navbarOffsetBreakpoint="sm"
        navbar={<Navbar isAuthenticated={isAuthenticated} signOut={signOut} />}
        header={<Header />}
      >
        {children}
        <Footer />
      </AppShell>
    </ScrollArea>
  );
};

export default Shell;
