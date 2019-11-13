import React from "react";

const Item = ({ id, name, type, imgSrc, isBought, isUsed, handleClick }) => {
  const handleClickBtn = () => {
    handleClick(id, type);
  };

  return (
    <li className="item-container">
      <div className={`background-${type}`}>
        <img  className="store-images" src={imgSrc} alt={name} />
      </div>
      <p>{name}</p>
      <button className="Store-button" onClick={handleClickBtn}>
        {type !== "inventory"
          ? isBought
            ? "Bought"
            : "Hire"
          : isUsed
          ? "Using"
          : "Not used"}
      </button>
    </li>
  );
};

export default Item;
