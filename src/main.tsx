import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Shell from "./layouts/Shell.tsx";
import { useState } from "react";
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
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Shell>
          <App />
        </Shell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
