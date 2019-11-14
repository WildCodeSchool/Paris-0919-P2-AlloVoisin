import React, { Component } from "react";
import IronmanSound from "../../soundEffects/pm_ag_1_2_abstract_guns_281.mp3";
import SpidermanSound from "../../soundEffects/316942__boxerdave92__spiderman-thwip.wav";
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
    if (hero.classList.contains('spiderMan')) {
      hero.classList.add('spiderMan-animation');
      setTimeout(() => {
        hero.classList.remove('spiderMan-animation')
      }, 200);
      this.audio = new Audio(SpidermanSound)
      this.audio.play()
      this.audio.volume = 1.0;
    }
    else if (hero.classList.contains('hulk')) {
      hero.classList.add('hulk-animation');
      setTimeout(() => {
        hero.classList.remove('hulk-animation')
      }, 200);}
      else if (hero.classList.contains('blackWidow')) {
        hero.classList.add('blackWidow-animation');
        setTimeout(() => {
          hero.classList.remove('blackWidow-animation')
        }, 200);}
    else {
    hero.classList.add('hero-animation');
    setTimeout(() => {
      hero.classList.remove('hero-animation')
    }, 200);
    this.audio = new Audio(IronmanSound)
    this.audio.play()
    this.audio.volume = 0.3;
  }

    const laser = document.querySelector(".laser");
    if (hero.classList.contains('spiderMan')) {
    laser.className = "web-animation1 web laser";
    setTimeout(() => {
      laser.className = "web-animation2 web laser";
    }, 100);
    setTimeout(() => {
      laser.className = "web-animation3 web laser";
    }, 150);
    setTimeout(() => {
      laser.className = "web-animation4 web laser";
    }, 250);
    setTimeout(() => {
      laser.className = "web-animation5 web laser";
    }, 300);
    setTimeout(() => {
      laser.className = "laser";
    }, 350);
  }

  else{
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
  }
};

    render() {
        return (
            <div id="hero" className="hero" onClick={this.animPerso} >
                <div className='laser' alt="laser"></div>
            </div>
        )
    }
}

