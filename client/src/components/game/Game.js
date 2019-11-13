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
    isStart: true,
    coins: 0,
    health: 0,
    healthDivisor: 0,
    level: 0,
    villainImg: "",
    store: {
      characters: null,
      skins: null
    },
    villains: null,
    timer: 30,
    seconds: 1 //this.props.seconds
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

  decrementTimer = () => {
    if (this.state.timer > 0) {
      this.setState({ timer: this.state.timer - 1 });
    }
  };

 setTimer = () => {
    this.gameTimer = setInterval(this.decrementTimer, 1000);
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

  checkIfStart = () => {
    if (this.state.startTimer === 0 && this.state.health > 0) {
      clearInterval(this.gameTimer);
      this.setState({
        isGameOver: true,
        timer: null
      });
    }
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
    this.startTimer = setInterval(this.tick, 1000);
    setTimeout(() => {
      this.setTimer();
    }, 4000);
  };

  componentDidUpdate = () => {
    this.checkIfGameOver();
    this.checkIfWin();
  };

  componentWillUnmount = () => {
    clearInterval(this.gameTimer);
  };


  //startTimer


  tick = () => {
    if (this.state.seconds < 3) {
      this.setState({ seconds: this.state.seconds + 1 });
    } else {
      clearInterval(this.startTimer);
      this.setState({ seconds: "Fight !" });
      // window.location.reload();
      const fight = document.getElementById("fight");
      setTimeout(() => {
        fight.style.display = "none";
      }, 1000);
    }
  };


  render() {
    return (
      <div id="game">
        {this.state.level === 0 ? <Loading /> : <></>}

        <Header
          health={this.state.health}
          healthDivisor={this.state.healthDivisor}
          timer={this.state.timer}
          level={this.state.level}
          coins={this.state.coins}
          addCoins={this.addCoins}
          resetGame={this.resetGame}
        />
        <Fighters
          removeHealth={this.removeHealth}
          addCoins={this.addCoins}
          villainImg={this.state.villainImg}
          level={this.state.level}
        />
         <div className="start-game" style={{ width: "100%", textAlign: "center" }}>
        <h1 id="fight">{this.state.seconds} </h1>
        </div>
        
        {this.state.isGameOver ? <GameOver /> : <></>}
      
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
