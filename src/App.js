import React, { useEffect, useState } from "react";
import AppRouter from "./routes/Router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      light: "#e9ddff",
      main: "#6750A4",
      dark: "#22005d",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#e8def8",
      main: "#625b71",
      dark: "#1e192b",
      contrastText: "#ffffff",
    },
    tertiary: {
      light: "#ffd9e3",
      main: "#7e5260",
      dark: "#31101d",
      contrastText: "#ffffff",
      // contrastText: "rgba(0, 0, 0, 0.87)",
    },
    error: {
      light: "#ffffff",
      main: "#ba1a1a",
      dark: "#410002",
      contrastText: "#ffdad6",
    },
    background: {
      light: "#fffbff",
      main: "#fffbff",
      dark: "#1c1b1e",
      contrastText: "#1c1b1e",
    },
    surface: {
      light: "#7a757f",
      main: "#e7e0eb",
      dark: "#f4eff4",
      contrastText: "#49454e",
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="appA">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
