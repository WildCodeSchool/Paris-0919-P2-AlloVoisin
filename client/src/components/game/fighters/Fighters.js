import React from "react";
import Hero from "./Hero";
import Villain from "./Villain";
import "./Fighters.css";

const Fighters = ({ removeHealth, addCoins, villainImg, level }) => {
  return (
    <div className="fighters-container">
      <Hero removeHealth={removeHealth} addCoins={addCoins} />
      <Villain villainImg={villainImg} level={level} />
    </div>
  );
};

export default Fighters;
