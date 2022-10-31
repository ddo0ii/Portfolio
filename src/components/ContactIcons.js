import React from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBloggerB,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

function ContactIcons() {
  return (
    <Box className="contactIcons">
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
  );
}

export default ContactIcons;
