import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import PageNotFound from "./components/PageNotFound.tsx";
import { Notifications } from "@mantine/notifications";
import SignUp from "./components/auth/SignUp.tsx";
import SignIn from "./components/auth/SignIn.tsx";
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
import { AuthProvider } from "react-auth-kit";

const Root = () => {
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
        <AuthProvider authType={"localstorage"} authName={"_auth"}>
          <BrowserRouter>
            <Shell>
              <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/dashboard/:tabValue?/:projectName?"
                  element={<Dashboard />}
                />
                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </Shell>
          </BrowserRouter>
        </AuthProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
