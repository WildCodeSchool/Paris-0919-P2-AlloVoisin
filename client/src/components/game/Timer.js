import React, { Component } from 'react'
import './Timer.css'

class Timer extends Component {

    render() {
       
        return (
            <div>
                <div className="timer">
                {this.props.timer} &nbsp;&nbsp;&nbsp;sec
                </div>
            </div>
        )
    }
}

export default Timer