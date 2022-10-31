import { useEffect, useState } from "react";
import AppRouter from "./routes/Router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#C27D5B",
      // dark: will be calculated from palette.primary.main,
      // contrastText: "#C27D5B",
    },
    secondary: {
      main: "#DEDEDE",
      // contrastText: "#DEDEDE",
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
        {init ? (
          <div>
            <AppRouter />
          </div>
        ) : (
          <Box className="loading" sx={{ display: "flex" }}>
            <CircularProgress color="inherit" />
          </Box>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
