import React, { Component } from 'react'
import './BtnStart.css'

export default class BtnStart extends Component {
    render() {
        return (
            <div>
                <button className="start-btn" onClick={this.props.showGame}>Start Game</button>
            </div>
        )
    }
}
