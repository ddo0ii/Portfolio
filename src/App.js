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
      main: "#EADDFF",
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
      main: "#FFD8E4",
      contrastText: "#31101d",
    },
    error: {
      main: "#B3261E",
      contrastText: "#ffffff",
    },
    errorContainer: {
      main: "#F9DEDC",
      contrastText: "#410E0B",
    },
    background: {
      main: "#FFFBFE",
      contrastText: "#1C1B1F",
    },
    backgroundContainer: {
      main: "#FFFBFE",
      contrastText: "#1C1B1F",
    },
    outline: {
      main: "#79747E",
      contrastText: "#79747E",
    },
    outlineContainer: {
      main: "#E7E0EC",
      contrastText: "#49454F",
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
