import React from "react";
import {NavLink} from 'react-router-dom';
import "./StoreBar.css";

const StoreBar = () => {

  const handleClick = () => {
    
  };

  return (
    <div className="store-bar-container">
      <ul className="img-container">
      
        <NavLink className="nav-link" id="img-skins" to="/store/skins">
          <img
            src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-skins.png"
            alt="skin"
          />
          <p>Skins</p>
        </NavLink>
        <NavLink className="nav-link" id="img-characters" to="/store/characters">
          <img
            src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-characters.png"
            alt="character"
          />
          <p>Characters</p>
        </NavLink>
        <NavLink className="nav-link" id="img-skills" to="/store">
          <img
            src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-skills.png"
            alt="skill"
          />
          <p>Skills</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default StoreBar;
