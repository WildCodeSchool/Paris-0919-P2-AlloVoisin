import React from 'react'
import './Pause.css'

const Pause = ({ pauseGame, continueGame }) => {
  return (
    <div className="pauseDiv">
      <button className="btn-homepage" onClick={pauseGame}>
        PAUSE
      </button>
      <div id="gamePausedDiv">
        <h2>Game is paused</h2>
        <button className="btn-homepage" onClick={continueGame}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};
export default Pause;
