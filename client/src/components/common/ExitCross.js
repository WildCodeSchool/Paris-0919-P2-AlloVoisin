import React from "react";

const ExitCross = ({ exitStore }) => {
  return (
    <>
      <img
        src="https://image.noelshack.com/fichiers/2019/43/4/1571929738-cross.png"
        alt="cross"
        className="cross"
        onClick={exitStore}
      />
    </>
  );
};

export default ExitCross;
