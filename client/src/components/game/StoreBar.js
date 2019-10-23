import React from "react";
import {NavLink} from 'react-router-dom';
import "./StoreBar.css";

const StoreBar = () => {

  const handleClick = () => {
    
  };

  return (
    <div className="store-bar-container">
      <ul className="img-container">
        <NavLink className="nav-link" id="img-weapons" to="/store">
          <img
            src="https://image.noelshack.com/fichiers/2019/43/3/1571823611-weapons.png"
            alt="weapon"
          />
        </NavLink>
        <NavLink className="nav-link" id="img-skins" to="/store/skins">
          <img
            src="https://image.noelshack.com/fichiers/2019/43/3/1571823600-skins.png"
            alt="skin"
          />
        </NavLink>
        <NavLink className="nav-link" id="img-characters" to="/store/characters">
          <img
            src="https://image.noelshack.com/fichiers/2019/43/3/1571823595-characters.png"
            alt="character"
          />
        </NavLink>
        <NavLink className="nav-link" id="img-skills" to="/store">
          <img
            src="https://image.noelshack.com/fichiers/2019/43/3/1571823603-skills.png"
            alt="skill"
          />
        </NavLink>
      </ul>
    </div>
  );
};

export default StoreBar;
