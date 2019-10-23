import React, { Component } from 'react'
import './Hero.css'

export default class Hero extends Component {
    animVillain = () => {
        const villain = document.querySelector('.villain') ;
        villain.className="villain-animation villain";
        setTimeout(()=>{villain.className="villain"}, 200);
    }

    render() {
        return (
            <div className="hero" onClick={this.animVillain} >
                
            </div>
        )
    }
}
