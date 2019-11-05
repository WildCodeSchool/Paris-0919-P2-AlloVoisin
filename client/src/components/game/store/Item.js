import React from "react";

const Item = ({ type, name, imgSrc }) => {
  return (
    <li className="item-container">
      <div className={`background-${type}`}>
        <img src={imgSrc} alt={name} />
      </div>
      <p>{name}</p>
      <button className="Store-button">Hire</button>
    </li>
  );
};

export default Item;
