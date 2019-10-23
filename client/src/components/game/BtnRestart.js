import React, { Component } from "react";
import './BtnRestart.css';


class BtnRestart extends Component {
    state = {
        score: 0,
        username: ""
    }

    render() {
        return (
            <button
            id="restartGame"
            type="button"
            className="btn"
            >
            RESTART
            </button>
        )
    }
}

export default BtnRestart;
