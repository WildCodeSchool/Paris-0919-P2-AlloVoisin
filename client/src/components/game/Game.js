import React, { Component } from "react";
import Header from "./header/Header";
import Fighters from "./fighters/Fighters";
import StoreBar from "./store/StoreBar";
import GameOver from "./GameOver";
import Loading from "../common/Loading";
import Store from "./store/Store";
import Sound from "../soundEffects/zapsplat_human_male_voice_says_game_over_004_15729.mp3";
import SoundFinishHim from "../soundEffects/vo_anno_finish_him06.mp3";
import SoundCountdown from "../soundEffects/472853__nakamurasensei__countdown-to-fight.mp3";
import axios from "axios";
import { Route } from "react-router-dom";
import "./Game.css";

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
      skins: null,
      inventory: null
    },
    villains: null,
    timer: 30,
    gamePaused: false,
    seconds: 3 //this.props.seconds
  };

  handleBuyItem = (id, items) => {
    const newItems = items.map(item => {
      if (item._id === id && !item.isBought && item.isAvailable) {
        this.removeCoins(item.price);
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

  changeToInventoryItems = items => {
    return items.map(item => {
      return {
        ...item,
        isUsed: false
      };
    });
  };

  getBoughtItems = items => {
    let boughtItems = items.filter(item => item.isBought);
    boughtItems = this.changeToInventoryItems(boughtItems);
    return boughtItems.length > 0 ? boughtItems : [];
  };

  updateInventory = () => {
    const boughtCharacters = this.getBoughtItems(this.state.store.characters);
    const boughtSkins = this.getBoughtItems(this.state.store.skins);
    const allBoughtItems = [...boughtCharacters, ...boughtSkins];
    this.setState({
      store: {
        ...this.state.store,
        inventory: allBoughtItems
      }
    });
  };

  refreshStore = id => {
    const newCharacters = this.handleBuyItem(id, this.state.store.characters);
    const newSkins = this.handleBuyItem(id, this.state.store.skins);

    this.setState(
      {
        store: {
          ...this.state.store,
          skins: newSkins,
          characters: newCharacters
        }
      },
      async () => {
        await this.updateIsAvailable();
        await this.updateInventory();
      }
    );
  };

  handleUseItem = id => {
    const newInventory = this.state.store.inventory.map(item => {
      if (item._id === id && !item.isUsed) {
        return {
          ...item,
          isUsed: true
        };
      }
      return item;
    });
    this.setState({
      store: {
        ...this.state.store,
        inventory: newInventory
      }
    });
  };

  handleClickStoreBtn = (id, type) => {
    if (type !== "inventory") {
      this.refreshStore(id);
    } else {
      this.handleUseItem(id);
    }
  };

  checkIfAvailableItems = items => {
    const newItems = items.map(item => {
      if (this.state.coins >= item.price && !item.isBought) {
        return {
          ...item,
          isAvailable: true
        };
      } else {
        return {
          ...item,
          isAvailable: false
        };
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
        ...this.state.store,
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

  removeCoins = price => {
    this.setState({
      coins: this.state.coins - price
    });
    this.updateIsAvailable();
  };

  removeCoins = nbCoins => {
    this.setState({
      coins: this.state.coins - nbCoins
    });
  };

  characterIsBought = character => {
    if (character === "Black-widow") {
      this.setState({
        "Black-widow": true
      });
    }
    if (character === "Thor") {
      this.setState({
        Thor: true
      });
    }
    if (character === "Spider-man") {
      this.setState({
        "Spider-man": true
      });
    }
    if (character === "Hulk") {
      this.setState({
        Hulk: true
      });
    }
    if (character === "Ms Marvel") {
      this.setState({
        "Ms Marvel": true
      });
    }
  };

  removeHealth = () => {
    if (this.state.health > 0) {
      this.setState({
        health: this.state.health - 1
      });
    }
  };

  toggleIsStoreOpen = async () => {
    await this.setState({
      isStoreOpen: !this.state.isStoreOpen
    });
    console.log(this.state.isStoreOpen);
    if (this.state.isStoreOpen) {
      clearInterval(this.gameTimer);
    } else {
      this.setTimer();
    }
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
    const pauseDiv = document.getElementById("gamePausedDiv");
    pauseDiv.style.display = "block";
  };

  continueGame = () => {
    this.gameTimer = setInterval(this.decrementTimer, 1000);
    const pauseDiv = document.getElementById("gamePausedDiv");
    pauseDiv.style.display = "none";
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
      this.audio = new Audio(Sound)
      this.audio.play()
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
    this.fetchGameData(IP);
    this.startTimer = setInterval(this.tick, 1000);
    setTimeout(() => {
      this.setTimer();
    }, 4000);
  };

  componentDidUpdate = () => {
    this.checkIfGameOver();
    this.checkIfWin();
    this.finishHim();
    };

  componentWillUnmount = () => {
    clearInterval(this.gameTimer);
  };

  //startTimer

  tick = () => {
    if (this.state.seconds > 1) {
      this.setState({ seconds: this.state.seconds - 1 });
      this.audio = new Audio(SoundCountdown)
      this.audio.play()
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

  finishHim = () => {
    if (this.state.health === 10) {
      this.audio = new Audio(SoundFinishHim)
      this.audio.play()
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
          pauseGame={this.pauseGame}
          continueGame={this.continueGame}
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
              handleClick={this.handleClickStoreBtn}
              removeCoins={this.removeCoins}
              characterIsBought={this.characterIsBought}
            />
          )}
        />
      </div>
    );
  }
}
