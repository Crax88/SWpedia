import React from "react";
import "./ErrorIndicator.css";
import icon from "./deathStar.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">BOOM</span>
      <span>Something has gone wrong</span>
      <span>(droids are already sent to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
