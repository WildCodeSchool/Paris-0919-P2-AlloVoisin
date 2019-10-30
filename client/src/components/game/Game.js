import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Coins from "./Coins";
import Hero from "./Hero";
import Villain from "./Villain";
import StoreBar from "./StoreBar";
import Characters from "./store/Characters";
import Skins from "./store/Skins";
import Skills from "./store/Skills";
import HealthBar from './HealthBar';
import NavBar from '../common/NavBar';
import "./Game.css";
import BtnRestart from "./BtnRestart";

export default class Game extends Component {
  state = {
    storeCharaters: false,
    storeSkins: false,
    storeSkills: false
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

  render() {
    return (
      <div id="game">
          <HealthBar health={this.props.health}/>
          <BtnRestart />
          <Coins coins={this.props.coins} addCoins={this.props.addCoins}/>
          <NavBar />
          <Hero removeHealth={this.props.removeHealth} addCoins={this.props.addCoins}/>
          <Villain />
          {this.state.storeCharaters ? <Characters showStoreCharacters={this.showStoreCharacters}/> : <></>}
          {this.state.storeSkins ? <Skins showStoreSkins={this.showStoreSkins}/> : <></>}
          {this.state.storSkills ? <Skills showStoreSkills={this.showStoreSkills}/> : <></>}
          <StoreBar showStoreCharacters={this.showStoreCharacters} showStoreSkins={this.showStoreSkins} showStoreSkills={this.showStoreSkills}/>
            
          {/* <Router>
                      <Route path='/store/characters' component={Characters}/>
                      <Route path='/store/skins' component={Skins}/>
                      <Route path='/store/skills' component={Skills}/>
                    
                    </Router>       */}
      </div>
    );
  }
}
