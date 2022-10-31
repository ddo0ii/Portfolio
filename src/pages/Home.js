import React from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBloggerB,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="homePage">
      <Container>
        <Toolbar />
        {/* <Typography
          align="left"
          sx={{ typography: { sm: "subtitle1", xs: "overline" } }}
        >
          Hi I’m
        </Typography> */}
        <Typography
          align="center"
          gutterBottom
          sx={{ typography: { sm: "h1", xs: "h4" } }}
        >
          SOYEONG KWON
        </Typography>
        <Typography
          align="center"
          gutterBottom
          sx={{ typography: { sm: "h4", xs: "body1" } }}
        >
          FRONT-END WEB DEVELOPER
        </Typography>

        <Box align="center">
          <Box
            className="contactIcons"
            sx={{
              fontSize: { sm: "25px", xs: "18px" },
            }}
          >
            <div className="contactIcon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="contactIcon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contactIcon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="contactIcon">
              <FontAwesomeIcon icon={faBloggerB} />
            </div>
            <div className="contactIcon">
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
