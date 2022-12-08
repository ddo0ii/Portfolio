import React from "react";
import { Box, Container, Toolbar, Typography } from "@mui/material";
import ContactIcons from "../components/ContactIcons";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function Home() {
  const animatedItem = {
    0: useScrollFadeIn("down", 1, 0),
    1: useScrollFadeIn("down", 1, 0.2),
    2: useScrollFadeIn("down", 1, 0.3),
    3: useScrollFadeIn("down", 1, 0.4),
  };
  return (
    <Box className="homePage">
      <Container>
        <Toolbar />
        <Typography
          {...animatedItem[1]}
          align="center"
          gutterBottom
          color="primary"
          sx={{ typography: { sm: "h1", xs: "h4" } }}
        >
          <b>SOYEONG KWON</b>
        </Typography>
        <Typography
          {...animatedItem[2]}
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
          {...animatedItem[3]}
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
