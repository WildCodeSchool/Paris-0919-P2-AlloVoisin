import React from "react";
import { NavLink } from "react-router-dom";

const ExitCross = ({ exitStore }) => {
  return (
    <NavLink to="/game">
      <img
        src="https://image.noelshack.com/fichiers/2019/43/4/1571929738-cross.png"
        alt="cross"
        className="cross"
        onClick={exitStore}
      />
    </NavLink>
  );
};

export default ExitCross;
