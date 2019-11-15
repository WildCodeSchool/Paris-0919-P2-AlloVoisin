import React from "react";
import "./GameOver.css";

const GameOver = ({ timer, health }) => {
  return (
    <div id="game-over">
      <p className="game-over">
        {/* {timer > 0 && health > 0 ? "SUCCESS" : "GAME OVER"} */}
        GAME OVER
      </p>
    </div>
  );
};

export default GameOver;
