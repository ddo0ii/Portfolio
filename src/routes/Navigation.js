import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <div className="nav">
      <nav className="navLeft">
        <Link to="/">
          <span>DDO_0II</span>
        </Link>
      </nav>
      <nav className="navRight">
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/certificates">
              <span>Certificates</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
