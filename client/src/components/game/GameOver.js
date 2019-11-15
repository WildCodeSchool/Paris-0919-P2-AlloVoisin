import React from "react";
import "./GameOver.css";

const GameOver = ({ isGameCompleted }) => {
  return (
    <div id="game-over">
      <p className="game-over">{isGameCompleted ? "SUCCESS" : "GAME OVER"}</p>
    </div>
  );
};

export default GameOver;
