import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Coins from "./Coins";
import Hero from "./Hero";
import Villain from "./Villain";
import StoreBar from "./StoreBar";
import Characters from "./store/Characters";
import Skins from "./store/Skins";
import Skills from "./store/Skills";
import HealthBar from "./HealthBar";
import NavBar from "../common/NavBar";
import Timer from "../game/Timer"
import "./Game.css";
import BtnRestart from "./BtnRestart";
import villains from "../game/villains.json";

import axios from "axios";

export default class Game extends Component {
  state = {
    coins: 0,
    health: 0,
    healthDivisor: 0,
    level: 0,
    villainImg: "",
    store: {
      characters: null,
      skins: null
    },
    storeCharaters: false,
    storeSkins: false,
    storeSkills: false,
    timer: 30,
  };

  addCoins = nbCoins => {
    this.setState({
      coins: this.state.coins + nbCoins
    });
  };

  removeHealth = () => {
    if (this.state.health > 0) {
      this.setState({
        health: this.state.health - 1
      });
    }
  };

  showStoreCharacters = () => {
    this.setState({
      storeCharaters: !this.state.storeCharaters
    });
  };

  showStoreSkins = () => {
    this.setState({
      storeSkins: !this.state.storeSkins
    });
  };

  showStoreSkills = () => {
    this.setState({
      storeSkills: !this.state.storeSkills
    });
  };

  decrement = () => {
    if (this.state.timer > 0) {
        this.setState({timer : this.state.timer -1})
    }
}

Timer = () => {
   setInterval(this.decrement, 1000)
}

  // Ip address 192.168.1.223
  componentDidMount = () => {
    axios
      .get("http://localhost:5000/store/characters")
      .then(characters => {
        this.setState({
          store: {
            ...this.state.store,
            characters: characters.data
          }
        });
      })
      .catch(error => console.log(error));

    axios
      .get("http://localhost:5000/store/skins")
      .then(skins =>
        this.setState({
          store: {
            ...this.state.store,
            skins: skins.data
          }
        })
      )
      .catch(error => console.log(error));

    this.setState({
      ...this.state,
      level: villains[0].idLevel,
      health: villains[0].damages,
      healthDivisor: villains[0].healthDivisor,
      villainImg: villains[0].image
    });

    this.Timer()
  };


  componentDidUpdate = () => {
    if (this.state.health === 0) {
      this.setState({
        ...this.state,
        level: this.state.level + 1,
        health: villains[this.state.level].damages,
        healthDivisor: villains[this.state.level].healthDivisor,
        villainImg: villains[this.state.level].image,
        timer : 30
      });
      this.addCoins(villains[this.state.level].coinAward)
    }
  };

  render() {
    return (
      <div id="game">
        <HealthBar
          health={this.state.health}
          healthDivisor={this.state.healthDivisor}
          timer={this.state.timer}
        />
        <BtnRestart />
        <Coins coins={this.state.coins} addCoins={this.addCoins} />
        <NavBar />
        <Hero
          removeHealth={this.removeHealth}
          addCoins={this.addCoins}
        />
        <Villain villainImg={this.state.villainImg} level={this.state.level} />
        {this.state.storeCharaters ? (
          <Characters
            characters={this.state.store.characters}
            showStoreCharacters={this.showStoreCharacters}
          />
        ) : (
          <></>
        )}
        {this.state.storeSkins ? (
          <Skins
            skins={this.state.store.skins}
            showStoreSkins={this.showStoreSkins}
          />
        ) : (
          <></>
        )}
        {this.state.storeSkills ? (
          <Skills showStoreSkills={this.showStoreSkills} />
        ) : (
          <></>
        )}
        <StoreBar
          showStoreCharacters={this.showStoreCharacters}
          showStoreSkins={this.showStoreSkins}
          showStoreSkills={this.showStoreSkills}
        />
      </div>
    );
  }
}