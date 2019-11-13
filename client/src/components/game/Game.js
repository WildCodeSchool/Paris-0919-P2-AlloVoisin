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
      skins: null
    },
    villains: null,
    timer: 30
  };

  handleBuyItem = (id, items) => {
    const newItems = items.map(item => {
      if (item._id === id && !item.isBought && item.isAvailable) {
        return {
          ...item,
          isBought: true,
          isAvailable: false
        };
      } else {
        return item;
      }
    });
    return newItems;
  };

  handleClickStoreBtn = id => {
    const newCharacters = this.handleBuyItem(id, this.state.store.characters);
    const newSkins = this.handleBuyItem(id, this.state.store.skins);
    this.setState({
      store: {
        skins: newSkins,
        characters: newCharacters
      }
    });
  };

  checkIfAvailableItems = items => {
    const newItems = items.map(item => {
      if (this.state.coins >= item.price) {
        return {
          ...item,
          isAvailable: true
        };
      } else {
        return item;
      }
    });
    return newItems;
  };

  updateIsAvailable = () => {
    const updatedCharacters = this.checkIfAvailableItems(
      this.state.store.characters
    );
    const updatedSkins = this.checkIfAvailableItems(this.state.store.skins);
    this.setState({
      store: {
        skins: updatedSkins,
        characters: updatedCharacters
      }
    });
  };

  addCoins = nbCoins => {
    this.setState({
      coins: this.state.coins + nbCoins
    });
    this.updateIsAvailable();
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
      document.getElementById("game").style.backgroundImage = `url(${
        this.state.villains[this.state.level].bgSrc
      })`;
    }
  };

  // Mettre IP à la place de LOCALHOST
  componentDidMount = () => {
    this.fetchGameData(LOCALHOST);
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
    console.log(this.state.store);
    return (
      <div id="game">
        {this.state.level === 0 ? <Loading /> : <></>}
        {/* {this.state.isGameOver ? <GameOver /> : <></>} */}
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
        <StoreBar handleClick={this.toggleIsStoreOpen} />
        <Route
          path="/game/store/:section"
          render={props => (
            <Store
              section={props.match.params.section}
              store={this.state.store}
              coins={this.state.coins}
              handleExitStore={this.toggleIsStoreOpen}
              handleClick={this.handleClickStoreBtn}
            />
          )}
        />
      </div>
    );
  }
}
