import React, { Component } from 'react';
import '../rules/Rules.css';

export default class Rules extends Component {
    render() {
        return (
            <div className="popup">
            <div className="popup-inner">
                <h1 id="rules-title">{this.props.text}</h1>
                <p className='rules-game'><br></br>Fight your enemies by clicking within the allotted time. </p>
                <p className='rules-game'>Earn coins at every level and buy amazing new heroes !</p>
                <img
          src="https://image.noelshack.com/fichiers/2019/43/4/1571929738-cross.png"
          alt="cross"
          className="cross"
          onClick={this.props.closePopup}
        />
        <img src="https://purepng.com/public/uploads/large/purepng.com-ironman-flyingironmansuperheromarvel-comicscharactermarvel-studiosrobert-downey-jrtony-stark-17015286119392nuwa.png"
        alt="iron man"
        className="go"/>
            </div>
            </div>
        )
    }
}

