import React, { Component } from "react";
import "./Villain.css";

export default class Villain extends Component {
  componentDidMount() {
    const img = document.getElementById("villain");
    if (this.props.villainImg !== "") {
      img.style.backgroundImage = `url(${this.props.villainImg})`;
    }
  }
  componentDidUpdate() {
    const img = document.getElementById("villain");
    img.style.backgroundImage = `url(${this.props.villainImg})`;
  }
  render() {
    return <div id="villain" className="villain"></div>;
  }
}
