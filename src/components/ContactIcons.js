import React from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBloggerB,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactIcons() {
  return (
    <Box className="contactIcons">
      <div className="contactIcon">
        <a href="mailto:soyeong5857@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="contactIcon">
        <a href="https://github.com/ddo0ii" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="contactIcon">
        <a href="https://ddo-development.tistory.com/" target="_blank">
          <FontAwesomeIcon icon={faBloggerB} />
        </a>
      </div>
      <div className="contactIcon">
        <a href="https://instagram.com/ddo_0ii" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      {/* <div className="contactIcon">
        <a href="https://www.linkedin.com/in/ddo0ii/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div> */}
      <div className="contactIcon">
        <a
          href="https://www.youtube.com/channel/UCVS6YLI6ea8eZ5tOXSnjEVg"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </Box>
  );
}

export default ContactIcons;
