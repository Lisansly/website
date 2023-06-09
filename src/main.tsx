import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import { Notifications } from "@mantine/notifications";
import refreshToken from "./RefreshToken.ts";
import Shell from "./components/Shell.tsx";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

import Routes from "./Routes.tsx";
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
            <Shell>
              <Routes />
            </Shell>
          </BrowserRouter>
        </AuthProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
