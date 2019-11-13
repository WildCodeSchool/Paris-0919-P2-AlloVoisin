import React from "react";
import HealthBar from "./HealthBar";
import Coins from "./Coins";
import BtnRestart from "./BtnRestart";
import NavBar from "../../common/NavBar";
import Pause from "./Pause";

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
    <div>
      <HealthBar
        health={health}
        healthDivisor={healthDivisor}
        timer={timer}
        level={level}
      />
      <Coins coins={coins} addCoins={addCoins} />
      <BtnRestart resetGame={resetGame} />
      <Pause pauseGame={pauseGame} continueGame={continueGame}/>
      <NavBar />
    </div>
  );
};

export default Header;
