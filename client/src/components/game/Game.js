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
import "./Game.css";
import BtnRestart from "./BtnRestart";
// import villains from "../game/villains.json";
import GameOver from "./GameOver";

import axios from "axios";

export default class Game extends Component {
  state = {
    isGameOver: false,
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
    villains: ["1", "2"]
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
      this.setState({ timer: this.state.timer - 1 });
    }
  };

  setTimer = () => {
    this.gameTimer = setInterval(this.decrement, 1000);
  };

  resetGame = () => {
    this.setState({
      ...this.state,
      isGameOver: false,
      level: 1,
      health: this.state.villains[0].damages,
      healthDivisor: this.state.villains[0].healthDivisor,
      villainImg: this.state.villains[0].image,
      coins: 0,
      timer: 30
    });
    document.getElementById(
      "game"
    ).style.backgroundImage = `url(${this.state.villains[0].bgSrc})`;
  };

  // displayGameOver = () => {
  //   setTimeout(<GameOver />, 4000);
  // };

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

    axios.get("http://localhost:5000/villains").then(
      villains => (
        this.setState({
          ...this.state,
          villains: villains.data,
          level: villains.data[0].idLevel,
          health: villains.data[0].damages,
          healthDivisor: villains.data[0].healthDivisor,
          villainImg: villains.data[0].image
        }),
        (document.getElementById(
          "game"
        ).style.backgroundImage = `url(${villains.data[0].bgSrc})`)
      )
    );
    this.setTimer();
  };

  // componentDidUpdate variant for when we will have a server running 24/7
  componentDidUpdate = () => {
    if (this.state.timer === 0 && this.state.health > 0) {
      this.setState({
        isGameOver: true,
        timer: 30
      });
      clearInterval(this.gameTimer);
    }
    if (this.state.health === 0 && this.state.level !== 0) {
      this.setState({
        ...this.state,
        level: this.state.level + 1,
        health: this.state.villains[this.state.level].damages,
        healthDivisor: this.state.villains[this.state.level].healthDivisor,
        villainImg: this.state.villains[this.state.level].image,
        timer: 30
      });
      this.addCoins(this.state.villains[this.state.level].coinAward);
      document.getElementById(
        "game"
      ).style.backgroundImage = `url(${this.state.villains[this.state.level].bgSrc})`;
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.gameTimer);
  };

  render() {
    return (
      <div id="game">
        {this.state.level === 0 ? (
          <div className="loading">Loading Game</div>
        ) : (
          <></>
        )}
        {/* {this.state.isGameOver ? this.displayGameOver : <></>} */}
        <HealthBar
          health={this.state.health}
          healthDivisor={this.state.healthDivisor}
          timer={this.state.timer}
          level={this.state.level}
        />
        <BtnRestart resetGame={this.resetGame} />
        <Coins coins={this.state.coins} addCoins={this.addCoins} />
        <NavBar />
        <Hero removeHealth={this.removeHealth} addCoins={this.addCoins} />

        <Villain villainImg={this.state.villainImg} level={this.state.level} />
        {this.state.storeCharaters ? (
          <Characters
            coins={this.state.coins}
            characters={this.state.store.characters}
            showStoreCharacters={this.showStoreCharacters}
          />
        ) : (
          <></>
        )}
        {this.state.storeSkins ? (
          <Skins
            coins={this.state.coins}
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
