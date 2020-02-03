import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="app-header">
      <h3 className="app-brand">
        <a href="#">SWpedia</a>
      </h3>
      <ul className="nav-list">
        <li className="nav-list-item">
          <a href="#" className="nav-link">
            People
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#" className="nav-link">
            Planets
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#" className="nav-link">
            Starships
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
