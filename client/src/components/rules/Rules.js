import React, { Component } from 'react';
import '../rules/Rules.css';

export default class Rules extends Component {
    render() {
        return (
            <div className="popup">
            <div className="popup-inner">
                <h1>{this.props.text}</h1>
                <button onClick={this.props.closePopup}>X</button>
            </div>
            </div>
        )
    }
}

