import React from "react";
// import {NavLink} from 'react-router-dom';
import "./StoreBar.css";
import { NavLink } from "react-router-dom";

class StoreBar extends React.Component {
  render() {
    return (
      <div className="store-bar-container">
        <ul className="img-container">
          <NavLink
            className="nav-link"
            id="img-skins"
            // onClick={this.props.showStoreSkins}
            to="/game/store/skins"
          >
            <img
              src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-skins.png"
              alt="skin"
            />
            <p>Skins</p>
          </NavLink>
          <NavLink
            className="nav-link"
            id="img-characters"
            // onClick={this.props.showStoreCharacters}
            to="/game/store/characters"
          >
            <img
              src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-characters.png"
              alt="character"
            />
            <p>Characters</p>
          </NavLink>
          <NavLink
            className="nav-link"
            id="img-skills"
            // onClick={this.props.showStoreSkills}
            to="/game/store/skins"
          >
            <img
              src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-skills.png"
              alt="skill"
            />
            <p>Skills</p>
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default StoreBar;
