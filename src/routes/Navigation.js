import React from "react";
import { Link } from "react-router-dom";
import styles from "../routes/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <nav className={styles.navTop}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/certificates">Certificates</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faBars} />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
