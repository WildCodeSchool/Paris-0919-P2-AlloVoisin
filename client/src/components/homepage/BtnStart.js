import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./BtnStart.css";

export default class BtnStart extends Component {
  render() {
    return (
      <div>
        <NavLink className="start-btn" onClick={this.props.showGame} to="/game">
          Start Game
        </NavLink>
      </div>
    );
  }
}
