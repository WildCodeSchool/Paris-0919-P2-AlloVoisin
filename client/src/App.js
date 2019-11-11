import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Game from "./components/game/Game";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../src/components/about/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/game" component={Game} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
