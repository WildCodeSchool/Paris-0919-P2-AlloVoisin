import React, { Component } from 'react'
import './Pause.css'

const Pause = ({ pauseGame, continueGame }) => {
        return (
            <div className="pauseDiv">
                <button onClick={pauseGame}>PAUSE</button>
                <div id="gamePausedDiv">
                    <h2>Game is paused</h2>
                    <button onClick={continueGame}>CONTINUE</button>
                </div>
            </div>
        )
}
export default Pause;