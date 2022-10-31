import React from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactIcons from "../components/ContactIcons";

function Home() {
  return (
    <Box className="homePage">
      <Container>
        <Toolbar />
        <Typography
          align="center"
          gutterBottom
          color="primary"
          sx={{ typography: { sm: "h1", xs: "h4" } }}
        >
          SOYEONG KWON
        </Typography>
        <Typography
          align="center"
          gutterBottom
          color="secondary"
          sx={{ typography: { sm: "h4", xs: "body1" } }}
        >
          FRONT-END WEB DEVELOPER
        </Typography>
        <ContactIcons />
      </Container>
    </Box>
  );
}

export default Home;
