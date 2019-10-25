import React from "react";
// import {NavLink} from 'react-router-dom';
import "./StoreBar.css";

class StoreBar extends React.Component {

  // const handleClick = () => {
    
  // };
  render() {
  return (
    <div className="store-bar-container">
      <ul className="img-container">
      
        <div className="nav-link" id="img-skins"  onClick={this.props.showStoreSkins}>
          <img
            src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-skins.png"
            alt="skin"
          />
          <p>Skins</p>
        </div>
        <div className="nav-link" id="img-characters" onClick={this.props.showStoreCharacters}>
          <img
            src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-characters.png"
            alt="character"
          />
          <p>Characters</p>
        </div>
        <div className="nav-link" id="img-skills" onClick={this.props.showStoreSkills}>
          <img
            src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-skills.png"
            alt="skill"
          />
          <p>Skills</p>
        </div>
      </ul>
    </div>
  );
  }
};

export default StoreBar;
