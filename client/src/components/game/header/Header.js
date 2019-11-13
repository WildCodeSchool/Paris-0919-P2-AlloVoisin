import React from "react";
import HealthBar from "./HealthBar";
import Coins from "./Coins";
import BtnRestart from "./BtnRestart";
import NavBar from "../../common/NavBar";

const Header = ({
  health,
  healthDivisor,
  timer,
  level,
  coins,
  addCoins,
  resetGame
}) => {
  return (
    <div>
      <HealthBar
        health={health}
        healthDivisor={healthDivisor}
        timer={timer}
        level={level}
      />
      <Coins coins={coins} addCoins={addCoins} />
      <BtnRestart resetGame={resetGame} />
      <NavBar />
    </div>
  );
};

export default Header;
