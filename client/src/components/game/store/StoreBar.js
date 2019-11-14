import React from "react";
import "./StoreBar.css";
import { NavLink } from "react-router-dom";

const StoreBar = ({ handleClick }) => {
  return (
    <div className="store-bar-container">
      <ul className="img-container">
        <NavLink
          activeClassName="active"
          className="nav-link"
          id="img-skins"
          onClick={handleClick}
          to="/game/store/skins"
        >
          <img
            src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-skins.png"
            alt="skin"
          />
          <p>Skins</p>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          id="img-characters"
          onClick={handleClick}
          to="/game/store/characters"
        >
          <img
            src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-characters.png"
            alt="character"
          />
          <p>Characters</p>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          id="img-skills"
          onClick={handleClick}
          to="/game/store/inventory"
        >
          <img
            src="https://image.noelshack.com/fichiers/2019/43/4/1571922941-skills.png"
            alt="skill"
          />
          <p>Inventory</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default StoreBar;
