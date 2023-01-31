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
      main: "#6750a4",
      contrastText: "#ffffff",
    },
    primaryContainer: {
      main: "#e9ddff",
      contrastText: "#22005d",
    },
    secondary: {
      main: "#625b71",
      contrastText: "#ffffff",
    },
    secondaryContainer: {
      main: "#e8def8",
      contrastText: "#1e192b",
    },
    tertiary: {
      main: "#7e5260",
      contrastText: "#ffffff",
    },
    tertiaryContainer: {
      main: "#ffd9e3",
      contrastText: "#31101d",
    },
    error: {
      main: "#ba1a1a",
      contrastText: "#ffffff",
    },
    errorContainer: {
      main: "#ffdad6",
      contrastText: "#410002",
    },
    background: {
      main: "#fffbff",
      contrastText: "#1c1b1e",
    },
    backgroundContainer: {
      main: "#FFFBFE",
      contrastText: "#1C1B1F",
    },
    outline: {
      main: "#7a757f",
      contrastText: "#7a757f",
    },
    outlineContainer: {
      main: "#e7e0eb",
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
