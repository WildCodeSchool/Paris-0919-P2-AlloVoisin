import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Game from "./components/game/Game";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../src/components/about/About";
import Skins from "./components/game/store/Skins";
import Characters from "./components/game/store/Characters";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/game" component={Game} />
              <Route path="/game/store/skins" component={Skins} />
              <Route path="/game/store/characters" component={Characters} />
              {/* <Route path="/game/store/skills" /> */}
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
