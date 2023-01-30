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
      light: "#C27D5B",
      main: "#C27D5B",
      dark: "#C27D5B",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#6750A4",
    },
    secondary: {
      light: "#DEDEDE",
      main: "#DEDEDE",
      dark: "#DEDEDE",
      contrastText: "#DEDEDE",
    },
    custom: {
      // light: "#ffa726",
      main: "#959595",
      // dark: "#ef6c00",
      // contrastText: "rgba(0, 0, 0, 0.87)",
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
