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
                 <button onClick={this.props.restartGame}
                id="restartGame"
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
