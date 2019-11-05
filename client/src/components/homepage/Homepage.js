import React, { Component } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import Game from "../game/Game";
import BtnStart from "./BtnStart";
import SocialNetwork from "../common/SocialNetwork";
import logoMarvelFight from "../../img/logoMarvelFight.png";
import villains from "../game/villains.json";
import "./Homepage.css";



export default class Homepage extends Component {
  state = {
    gameStarted: false,
    playing: true,
    coins: 0,
    health: 0,
    healthDivisor : 0,
    level : 0,
    villainImg : "",
    store: {
      characters: null,
      skins: null
    }
  };

  showGame = () => {
    this.setState({
      playing: !this.state.playing,
      gameStarted: !this.state.gameStarted
    });
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

  componentDidMount = () => {
       axios
      .get("http://localhost:5000/store/characters")
      .then(characters =>
        this.setState({
          store: {
            ...this.state.store,
            characters: characters.data
          }
        })
      )
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
        level: villains[0].idLevel,
        health: villains[0].damages,
        healthDivisor : villains[0].healthDivisor,
        villainImg : villains[0].image
    })
  }
  
  componentDidUpdate = () => {
        if(this.state.health === 0) {
            this.setState({
                level : this.state.level+1,
                health:  villains[this.state.level].damages,
                healthDivisor : villains[this.state.level].healthDivisor,
                villainImg : villains[this.state.level].image
            })
            
        }

  }

  render() {
    return (
      <div id="homepage">
        <div id="top-icons">
          <img
            src="https://image.noelshack.com/fichiers/2019/44/2/1572343624-logo.png"
            alt="Logo Iron Company"
            id="ironCompany"
          />
          <img src={logoMarvelFight} alt="Logo Marvel Fight" id="marvelFight" />
          <SocialNetwork />
        </div>
        <BtnStart showGame={this.showGame} />
        {this.state.gameStarted ? (
          <Game
            coins={this.state.coins}
            addCoins={this.addCoins}
            health={this.state.health}
            healthDivisor={this.state.healthDivisor}
            removeHealth={this.removeHealth}
            villainImg={this.state.villainImg}
            level={this.state.level}
            characters={this.state.store.characters}
            skins={this.state.store.skins}
          />
        ) : (
          <></>
        )}
        <p className="HomepageRules">Rules</p>
        <ReactPlayer
          url="https://www.youtube.com/embed/4vfGifZY85M"
          playing={this.state.playing}
          width="0"
          height="0"
        />
      </div>
    );
  }
}
