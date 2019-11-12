import React from "react";
import "./GameOver.css";

const GameOver = () => {
  return (
    <div className="gameover-container">
      <h4 className="game-over">Game Over</h4>
      <p>>Would you like to save your score ?</p>
      <form action="GET">
        <label htmlFor="username">Name</label>
        <input type="text" id="username" />
        <input type="button" value="Save Score" />
      </form>
    </div>
  );
};

export default GameOver;
