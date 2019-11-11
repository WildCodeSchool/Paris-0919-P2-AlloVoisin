import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Game from "./components/game/Game";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../src/components/about/About";

export default class App extends Component {
  state = {
    gameStarted: false
  };
  chargeGame = () => {
    this.setState({
      gameStarted: !this.state.gameStarted
    });
  };
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Homepage
                    {...props}
                    gameStarted={this.state.gameStarted}
                    chargeGame={this.chargeGame}
                  />
                )}
              />
              <Route exact path="/game" component={Game} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
