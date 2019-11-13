import React, { Component } from "react";
import Header from "./header/Header";
import Fighters from "./fighters/Fighters";
import StoreBar from "./store/StoreBar";
import GameOver from "./GameOver";
import Loading from "../common/Loading";
import Store from "./store/Store";
import "./Game.css";

import axios from "axios";
import { Route } from "react-router-dom";

const LOCALHOST = "http://localhost:5000";
const IP = "http://192.168.1.223:5000";
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
      skins: null,
    },
    villains: null,
    timer: 30,
    'Black-widow': false,
    'Thor': false,
    'Spider-man': false,
    'Hulk': false,
    'Ms Marvel': false,
    gamePaused: false
  };

  addCoins = nbCoins => {
    this.setState({
      coins: this.state.coins + nbCoins
    });
  };

  removeCoins = nbCoins => {
    this.setState({
      coins: this.state.coins - nbCoins
    });
  }

  characterIsBought = character => {
    if (character === 'Black-widow') {
      this.setState({
        'Black-widow' : true
      })
    }
    if (character === 'Thor') {
      this.setState({
        'Thor' : true
      })
    }
    if (character === 'Spider-man') {
      this.setState({
        'Spider-man' : true
      })
    }
    if (character === 'Hulk') {
      this.setState({
        'Hulk' : true
      })
    }
    if (character === 'Ms Marvel') {
      this.setState({
        'Ms Marvel' : true
      })
    }
  }

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

  decrementTimer = () => {
    if (this.state.timer > 0) {
      this.setState({ timer: this.state.timer - 1 });
    }
  };

  setTimer = () => {
    this.gameTimer = setInterval(this.decrementTimer, 1000);
  };

  pauseGame = () => {
    clearInterval(this.gameTimer);
    const pauseDiv = document.getElementById('gamePausedDiv');
    pauseDiv.style.display= 'block';
  }

  continueGame = () => {
    this.gameTimer = setInterval(this.decrementTimer, 1000);
    const pauseDiv = document.getElementById('gamePausedDiv');
    pauseDiv.style.display= 'none';
  }

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
    document.getElementById(
      "game"
    ).style.backgroundImage = `url(${this.state.villains[0].bgSrc})`;
    this.setTimer();
  };

  handleDataResponse = res => {
    const characters = res[0].data;
    const skins = res[1].data;
    const villains = res[2].data;
    this.setState({
      store: {
        ...this.state.store,
        characters,
        skins
      },
      villains,
      level: villains[0].idLevel,
      health: villains[0].damages,
      healthDivisor: villains[0].healthDivisor,
      villainImg: villains[0].image
    });
    document.getElementById(
      "game"
    ).style.backgroundImage = `url(${villains[0].bgSrc})`;
  };

  fetchGameData = url => {
    const urlCharacters = `${url}/store/characters`;
    const urlSkins = `${url}/store/skins`;
    const urlVillains = `${url}/villains`;
    Promise.all([
      axios.get(urlCharacters),
      axios.get(urlSkins),
      axios.get(urlVillains)
    ])
      .then(res => {
        this.handleDataResponse(res);
      })
      .catch(error => console.log(error));
  };

  checkIfGameOver = () => {
    if (this.state.timer === 0 && this.state.health > 0) {
      clearInterval(this.gameTimer);
      this.setState({
        isGameOver: true,
        timer: null
      });
    }
  };

  checkIfWin = () => {
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

  // Mettre IP à la place de LOCALHOST
  componentDidMount = () => {
    this.fetchGameData(IP);
    this.setTimer();
  };

  componentDidUpdate = () => {
    this.checkIfGameOver();
    this.checkIfWin();
  };

  componentWillUnmount = () => {
    clearInterval(this.gameTimer);
  };

  render() {
    return (
      <div id="game">
        {this.state.level === 0 ? <Loading /> : <></>}
        {this.state.isGameOver ? <GameOver /> : <></>}
        <Header
          health={this.state.health}
          healthDivisor={this.state.healthDivisor}
          timer={this.state.timer}
          level={this.state.level}
          coins={this.state.coins}
          addCoins={this.addCoins}
          resetGame={this.resetGame}
          pauseGame={this.pauseGame}
          continueGame={this.continueGame}
        />
        <Fighters
          removeHealth={this.removeHealth}
          addCoins={this.addCoins}
          villainImg={this.state.villainImg}
          level={this.state.level}
        />
        <StoreBar handleClick={this.toggleIsStoreOpen} />
        <Route
          path="/game/store/:section"
          render={props => (
            <Store
              section={props.match.params.section}
              store={this.state.store}
              coins={this.state.coins}
              handleExitStore={this.toggleIsStoreOpen}
              removeCoins={this.removeCoins}
              characterIsBought={this.characterIsBought}
              blackWidow={this.state["Black-widow"]}
              thor={this.state["Thor"]}
              spiderMan={this.state["Spider-man"]}
              hulk={this.state["Hulk"]}
              msMarvel={this.state["Ms Marvel"]}
            />
          )}
        />
      </div>
    );
  }
}
