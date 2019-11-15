import React from "react";
import "./Timer.css";

const Timer = ({ timer }) => {
  console.log(timer <= 10);
  return (
    <span className={timer <= 10 ? `timer money-time` : `timer`}>
      {timer > 0 ? `${timer} sec` : `time out`}
    </span>
  );
};

export default Timer;
