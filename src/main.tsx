import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import PageNotFound from "./components/PageNotFound.tsx";
import Profile from "./components/profile/Profile.tsx";
import { Notifications } from "@mantine/notifications";
import SignUp from "./components/auth/SignUp.tsx";
import SignIn from "./components/auth/SignIn.tsx";
import refreshToken from "./RefreshToken.ts";
import Home from "./components/home/Home.tsx";
import Shell from "./components/Shell.tsx";
import ReactDOM from "react-dom/client";
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
            <Shell>
              <Routes>
                <Route path="/profile/:tabValue?" element={<Profile />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/dashboard/:tabValue?/:projectName?"
                  element={
                    <RequireAuth loginPath={"/signin"}>
                      <Dashboard />
                    </RequireAuth>
                  }
                />
                <Route path="/*" element={<PageNotFound />} />
              </Routes>
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
