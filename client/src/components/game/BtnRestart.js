import React, { Component } from "react";
import './BtnRestart.css';


class BtnRestart extends Component {
    state = {
        score: 0,
        username: ""
    }

    render() {
        return (
            <div className="display">
                <button
                id="restartGame"
                type="button"
                className="btn"
                onClick={this.props.resetGame}
                >
                RESTART
                </button>
            </div>
        )
    }
}

export default BtnRestart;
