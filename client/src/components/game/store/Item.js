import React from "react";

const Item = ({
  id,
  name,
  type,
  imgSrc,
  isBought,
  isAvailable,
  handleClick
}) => {
  const handleClickBtn = () => {
    handleClick(id);
  };

  return (
    <li className="item-container">
      <div className={`background-${type}`}>
        <img src={imgSrc} alt={name} />
      </div>
      <p>{name}</p>
      <button className="Store-button" onClick={handleClickBtn}>
        {isBought ? "Bought" : "Hire"}
      </button>
    </li>
  );
};

export default Item;
