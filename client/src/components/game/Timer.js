import React, { Component } from 'react'
import './Timer.css'

class Timer extends Component {

    render() {
       
        return (
            <>
                <span className="timer">
                {this.props.timer} &nbsp;&nbsp;sec
                </span>
            </>
        )
    }
}

export default Timer