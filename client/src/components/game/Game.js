import React, { Component } from "react";
import Coins from "./Coins";
import Hero from "./Hero";
import Villain from "./Villain";
import StoreBar from "./StoreBar";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Characters from "./store/Characters";
import Skins from "./store/Skins";
import Skills from "./store/Skills";
import "./Game.css";

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
        <div id="backgroundCover">
          <Coins />
          <Hero />
          <Villain />
          {this.state.storeCharaters ? <Characters /> : <></>}
          {this.state.storeSkins ? <Skins /> : <></>}
          {this.state.storSkills ? <Skills /> : <></>}
          <StoreBar showStoreCharacters={this.showStoreCharacters} showStoreSkins={this.showStoreSkins} showStoreSkills={this.showStoreSkills}/>

          {/* <Router>
                      <Route path='/store/characters' component={Characters}/>
                      <Route path='/store/skins' component={Skins}/>
                      <Route path='/store/skills' component={Skills}/>
                    
                    </Router>       */}
        </div>
      </div>
    );
  }
}
