import React, { Component } from 'react';
import './HealthBar.css';

export default class HealthBar extends Component {


    render() {
        //  let dizaine = (((this.props.health)/10)%10)
        //  console.log(Math.round(dizaine*10))
      
        // let healthPercent = this.props.health * 100 / 
        // console.log(healthPercent)
        let health = {width:`${this.props.health}%`}
        return (
            <div className="health-bar">
                <p className="style">Level 1</p>
                <div className="health-container">
                    <div id="health" className="damage" style={health}></div>
                </div>
            </div>
        )
    }
};
