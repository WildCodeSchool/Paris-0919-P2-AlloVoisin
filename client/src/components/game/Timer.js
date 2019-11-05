import React, { Component } from 'react'
import './Timer.css'

class Timer extends Component {
    state = {
        timer: 30
    }

    decrement = () => {
        if (this.state.timer > 0) {
            this.setState({timer : this.state.timer -1})
        }
    }

    Timer = () => {
       setInterval(this.decrement, 1000)
    }

    componentDidMount() {
        this.Timer()
    }

    componentWillUnmount() {
       
        this.Timer()
        
    }

    // unmount
    // game over


    render() {
        console.log(this.state.timer);
        
        return (
            <div>
                <div onChange={this.Timer}>
                {this.state.timer}
                </div>
            </div>
        )
    }
}

export default Timer