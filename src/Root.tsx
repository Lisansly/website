import { Notifications } from "@mantine/notifications";
import Header from "./components/header/Header.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import refreshToken from "./RefreshToken.ts";
import Footer from "./components/Footer.tsx";
import Routes from "./Routes.tsx";
import { useState } from "react";
import "./index.css";
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
} from "@mantine/core";

export function Root() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (localStorage.getItem("theme") as ColorScheme) || "light"
  );
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    localStorage.setItem(
      "theme",
      value || (colorScheme === "dark" ? "light" : "dark")
    );
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          globalStyles(theme) {
            return {
              a: {
                color: theme.colorScheme === "dark" ? theme.white : theme.black,
                ":hover": {
                  cursor: "pointer",
                },
              },
            };
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications position="top-center" mt={"xl"} autoClose={4000} />
        <AuthProvider
          authType={"localstorage"}
          authName={"_auth"}
          refresh={refreshToken}
        >
          <BrowserRouter>
            <Header />
            <Navbar />
            <Routes />
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
