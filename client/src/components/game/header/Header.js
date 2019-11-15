import React from "react";
import HealthBar from "./HealthBar";
import Coins from "./Coins";
import BtnRestart from "./BtnRestart";
import NavBar from "../../common/NavBar";
import Pause from "./Pause";

import "./Header.css";

const Header = ({
  health,
  healthDivisor,
  timer,
  level,
  coins,
  addCoins,
  resetGame,
  pauseGame,
  continueGame
}) => {
  return (
    <div className="header-container">
      <NavBar />
      <div className="userInfo-homepage-container">
        <HealthBar
          health={health}
          healthDivisor={healthDivisor}
          timer={timer}
          level={level}
        />
        <Coins coins={coins} addCoins={addCoins} />
      </div>
      <div className="btn-homepage-container">
        <BtnRestart resetGame={resetGame} />
        <Pause pauseGame={pauseGame} continueGame={continueGame} />
      </div>
    </div>
  );
};

export default Header;
