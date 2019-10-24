import React, { Component } from 'react'
import './Hero.css'

export default class Hero extends Component {
    animPerso = () => {
        const villain = document.querySelector('.villain') 
        villain.className="villain-animation villain";
        setTimeout(()=>{villain.className="villain"}, 200);

        const hero = document.querySelector('.hero') 
        hero.className="hero-animation hero";
        setTimeout(()=>{hero.className="hero"}, 200);
    }

    render() {
        return (
            <div className="hero" onClick={this.animPerso} >
                
            </div>
        )
    }
}

