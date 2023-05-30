import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import SignUp from "./pages/SignUp.tsx";
import ReactDOM from "react-dom/client";
import Shell from "./layouts/Shell.tsx";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import { useState } from "react";
import "./index.css";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

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
              },
            };
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <Shell>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Shell>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
