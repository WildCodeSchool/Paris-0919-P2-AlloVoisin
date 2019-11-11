import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
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
            <Homepage />

            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <Homepage
                    {...props}
                    gameStarted={this.state.gameStarted}
                    chargeGame={this.chargeGame}
                  />
                )}
              />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
