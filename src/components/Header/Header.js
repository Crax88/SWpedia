import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="app-header">
      <h3 className="app-brand">
        <Link to="/">SWpedia</Link>
      </h3>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/persons" className="nav-link">
            People
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/planets" className="nav-link">
            Planets
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/starships" className="nav-link">
            Starships
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
