import React from "react";
import { Box, Container, Toolbar, Typography } from "@mui/material";
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
          <b>SOYEONG KWON</b>
        </Typography>
        <Typography
          align="center"
          gutterBottom
          color="secondary"
          sx={{
            typography: { sm: "h4", xs: "body1" },
          }}
        >
          FRONT-END WEB DEVELOPER
        </Typography>
        <Box
          className="homeContactIcons"
          sx={{
            fontSize: { sm: "25px", xs: "18px" },
          }}
        >
          <ContactIcons />
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
