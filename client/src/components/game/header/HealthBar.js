import React from "react";
import "./HealthBar.css";
import Timer from "./Timer";

const HealthBar = ({ health, healthDivisor, level, timer }) => {
  let healthCSS = { width: `${health / healthDivisor}%` };
  return (
    <div className="health-bar">
      <p className="style">
        Level {level}
        <Timer timer={timer} />
      </p>
      <div className="health-container">
        <div id="health" className="damage" style={healthCSS}></div>
      </div>
    </div>
  );
};

export default HealthBar;
