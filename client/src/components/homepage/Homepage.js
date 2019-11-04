import React, { Component } from "react";
import ReactPlayer from "react-player";
import Game from "../game/Game";
import BtnStart from "./BtnStart";
import SocialNetwork from "../common/SocialNetwork";
import logoMarvelFight from "../../img/logoMarvelFight.png";
import "./Homepage.css";

import axios from "axios";

export default class Homepage extends Component {
  state = {
    gameStarted: false,
    playing: true,
    coins: 0,
    health: 200,
    healthDivisor : 2
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
    this.setState({
      health: this.state.health - 1
    });
  };

  componentDidMount() {
    axios
      .get("81.255.10.81:5000/store/characters")
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div id="homepage">
        <div id="top-icons">
          <img
            src="https://image.noelshack.com/fichiers/2019/44/2/1572343624-logo.png
"
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
