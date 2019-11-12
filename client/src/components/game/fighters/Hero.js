import React, { Component } from "react";
import "./Hero.css";

export default class Hero extends Component {
  animPerso = () => {
    this.props.removeHealth();

    this.props.addCoins(10);

    const villain = document.querySelector(".villain");
    villain.className = "villain-animation villain";
    setTimeout(() => {
      villain.className = "villain";
    }, 200);

    const hero = document.querySelector(".hero");
    hero.className = "hero-animation hero";
    setTimeout(() => {
      hero.className = "hero";
    }, 200);

    const laser = document.querySelector(".laser");
    laser.className = "laser-animation1 laser";
    setTimeout(() => {
      laser.className = "laser-animation2 laser";
    }, 100);
    setTimeout(() => {
      laser.className = "laser-animation3 laser";
    }, 150);
    setTimeout(() => {
      laser.className = "laser-animation4 laser";
    }, 250);
    setTimeout(() => {
      laser.className = "laser-animation5 laser";
    }, 300);
    setTimeout(() => {
      laser.className = "laser";
    }, 350);
  };

    render() {
        return (
            <div className="hero" onClick={this.animPerso} >
                <div className='laser' alt="laser"></div>
            </div>
        )
    }
}
