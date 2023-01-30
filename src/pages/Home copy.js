import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
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
    <Box
      className="homePage"
      sx={{
        pt: { sm: "50px", xs: "20px" },
        pb: { sm: "100px", xs: "80px" },
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Box p={2} className="homeLetter">
              <Typography
                {...animatedItem[1]}
                mb={3}
                color="primary"
                sx={{
                  typography: { sm: "h3", xs: "h4" },
                  // color: "#ffb3b2",
                }}
              >
                <span style={{ fontFamily: "lightsFont" }}>SOYEONG KWON</span>
              </Typography>
              <Typography
                {...animatedItem[2]}
                mb={3}
                color="secondary"
                sx={{
                  typography: { sm: "h5", xs: "body1" },
                }}
              >
                <span>FRONT-END WEB DEVELOPER</span>
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
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={2}>
              <Typography align="center" p={3} pt={5}>
                <img
                  className="homeImg"
                  src={`${process.env.PUBLIC_URL}/images/homeImg.jpg`}
                  alt="Profile Image"
                  style={{ borderRadius: 30 }}
                />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
