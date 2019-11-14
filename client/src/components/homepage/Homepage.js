import React, { Component } from "react";
import ReactPlayer from "react-player";
import BtnStart from "./BtnStart";
import Header from "./Header";
import Rules from "../../components/rules/Rules";
import "./Homepage.css";

export default class Homepage extends Component {
  state = {
    showPopup: false
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    return (
      <div id="homepage">
        <Header />
        <footer className="footer-container">
          <BtnStart showGame={this.showGame} />
          <p className="HomepageRules" onClick={this.togglePopup}>
            Rules
          </p>
          {this.state.showPopup ? (
            <Rules text="Rules of the game" closePopup={this.togglePopup} />
          ) : null}

          <ReactPlayer
            url="https://www.youtube.com/embed/4vfGifZY85M"
            playing={true}
            width="0"
            height="0"
          /> 
        </footer>
      </div>
    );
  }
}
