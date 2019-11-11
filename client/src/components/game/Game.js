import React, { Component } from "react";
import Coins from "./Coins";
import Hero from "./Hero";
import Villain from "./Villain";
import StoreBar from "./StoreBar";
import HealthBar from "./HealthBar";
import NavBar from "../common/NavBar";
import "./Game.css";
import BtnRestart from "./BtnRestart";
import GameOver from "./GameOver";
import Store from "./store/Store";

import axios from "axios";
import { Route } from "react-router-dom";
export default class Game extends Component {
  state = {
    isGameOver: false,
    isStoreOpen: false,
    coins: 0,
    health: 0,
    healthDivisor: 0,
    level: 0,
    villainImg: "",
    store: {
      characters: null,
      skins: null
    },
    timer: 2,
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

  toggleIsStoreOpen = () => {
    this.setState({
      isStoreOpen: !this.state.isStoreOpen
    });
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
    clearInterval(this.gameTimer);
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
    this.setTimer();
    document.getElementById(
      "game"
    ).style.backgroundImage = `url(${this.state.villains[0].bgSrc})`;
  };

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
      clearInterval(this.gameTimer);
      this.setState({
        isGameOver: true,
        timer: null
      });
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
        {this.state.isGameOver ? <GameOver /> : <></>}
        <HealthBar
          health={this.state.health}
          healthDivisor={this.state.healthDivisor}
          timer={this.state.timer}
          level={this.state.level}
        />
        <Coins coins={this.state.coins} addCoins={this.addCoins} />
        <BtnRestart resetGame={this.resetGame} />
        <NavBar />
        <Hero removeHealth={this.removeHealth} addCoins={this.addCoins} />
        <Villain villainImg={this.state.villainImg} level={this.state.level} />
        <StoreBar handleClick={this.toggleIsStoreOpen} />
        <Route
          path="/game/store/:section"
          render={props => (
            <Store
              section={props.match.params.section}
              store={this.state.store}
              coins={this.state.coins}
              handleExitStore={this.toggleIsStoreOpen}
            />
          )}
        />
      </div>
    );
  }
}
