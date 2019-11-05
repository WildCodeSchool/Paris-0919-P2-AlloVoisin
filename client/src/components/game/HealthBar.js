import React, { Component } from 'react';
import './HealthBar.css';
import Timer from './Timer'

export default class HealthBar extends Component {


    render() {

        let health = {width:`${this.props.health/this.props.healthDivisor}%`}
        return (
            <div className="health-bar">
                <p className="style">Level {this.props.level}<Timer  timer={this.props.timer}/></p>
                <div className="health-container">
                    <div id="health" className="damage" style={health}></div>
                </div>
            </div>
        )
    }
};
