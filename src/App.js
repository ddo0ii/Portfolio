import { useEffect, useState } from "react";
import AppRouter from "./routes/Router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, []);
  return (
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
  );
}

export default App;
