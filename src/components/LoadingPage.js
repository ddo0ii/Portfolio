import React from "react";
import { Box, Typography } from "@mui/material";

function LoadingPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#e8def8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography align="center">
        <img
          className="profileImg"
          src={`${process.env.PUBLIC_URL}/images/intro.gif`}
          alt="Profile Image"
        />
      </Typography>
    </Box>
  );
}

export default LoadingPage;
