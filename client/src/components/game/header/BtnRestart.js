import React from "react";
import "./BtnRestart.css";

const BtnRestart = ({ resetGame }) => {
  return (
    <div className="display">
      <button id="restartGame" className="btn" onClick={resetGame}>
        RESTART
      </button>
    </div>
  );
};

export default BtnRestart;
