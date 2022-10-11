import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => (
  <nav>
    <ul>
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          Homeing
        </Link>
      </li>
      <li>
        <Link to="/about">Abouting</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
