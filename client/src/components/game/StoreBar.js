import React from "react";
import "./StoreBar.css";

const StoreBar = () => {

  const handleClick = () => {
    
  };

  return (
    <div className="store-bar-container">
      <ul className="img-container">
        <li className="img-weapons" onClick={handleClick}>
          <img
            src="https://image.noelshack.com/fichiers/2019/43/3/1571823611-weapons.png"
            alt="weapon"
          />
        </li>
        <li className="img-skins" onClick={handleClick}>
          <img
            src="https://image.noelshack.com/fichiers/2019/43/3/1571823600-skins.png"
            alt="skin"
          />
        </li>
        <li className="img-characters" onClick={handleClick}>
          <img
            src="https://image.noelshack.com/fichiers/2019/43/3/1571823595-characters.png"
            alt="character"
          />
        </li>
        <li className="img-skills" onClick={handleClick}>
          <img
            src="https://image.noelshack.com/fichiers/2019/43/3/1571823603-skills.png"
            alt="skill"
          />
        </li>
      </ul>
    </div>
  );
};

export default StoreBar;
