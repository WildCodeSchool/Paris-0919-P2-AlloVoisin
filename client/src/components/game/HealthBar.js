import React, { Component } from 'react';
import './HealthBar.css';

export default class HealthBar extends Component {

    render() {
        return (
            <div className="health-bar">
                <p className="style">Level 1</p>
                <div className="health-container">
                    <div id="health" className="damage"></div>
                </div>
            </div>
        )
    }
};
